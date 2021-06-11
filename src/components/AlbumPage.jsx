import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/AlbumPageStyles.css";

export default class AlbumPage extends Component {
  state = {
    albums: [],
  };
  componentDidMount = () => {
    this.fetchData();
  };
  fetchData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/75621062",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYzMWYwNDQyNGY0NzAwMTUzZGVmY2MiLCJpYXQiOjE2MTkxNjYyNTMsImV4cCI6MTYyMDM3NTg1M30.qqMlSKGggXQ_6F_5dyAsIxEFzCFsQZUF6LHGbFMz3Is",
          },
        }
      );
      let fetchedAlbums = await response.json();
      this.setState({ albums: fetchedAlbums.tracks.data });
      console.log(this.state.albums);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <main>
        <div className="container">
          <div className="row text-white">
            <div className="col-md-12 col-lg-4 album-cover">
              {/*  <img
                src={}
                className="img-fluid w-100"
                alt=""
              /> */}
              <h3 className="mt-2">
                Queen II (Deluxe Edition
                <br />
                2011 Remaster)
              </h3>
              <p className="">Queen</p>
              <button
                type="button"
                className="btn rounded-pill my-3 px-5 text-light"
                id="btn-play"
              >
                PLAY
              </button>
              <p>1974 . 16 SONGS</p>

              <i className="far fa-heart"></i>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div>

            <div className="col-md-12 col-lg-8">
              {this.state.albums.map((album) => (
                <>
                  <div className="row track-lists mb-4">
                    <div className="col-md-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-music-note"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                        <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                        <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                      </svg>
                    </div>
                    <div className="col-12 col-md-9">
                      <div className="d-flex flex-column">
                        <h6>{album.title}</h6>
                        <p>{album.artist.name}</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2">
                      <p>1:13</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
