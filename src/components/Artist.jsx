import React, { Component } from "react";
import { Button, Nav } from "react-bootstrap";
import "../css/ArtistStyles.css";
export default class Artist extends Component {
  state = {
    albums: [],
  };
  componentDidMount = () => {
    this.fetchData();
  };
  fetchData = async (query) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/2105/albums",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYzMWYwNDQyNGY0NzAwMTUzZGVmY2MiLCJpYXQiOjE2MTkxNjYyNTMsImV4cCI6MTYyMDM3NTg1M30.qqMlSKGggXQ_6F_5dyAsIxEFzCFsQZUF6LHGbFMz3Is",
          },
        }
      );
      let fetchedAlbums = await response.json();
      this.setState({ albums: fetchedAlbums.data });
      console.log(this.state.albums[0].title);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <main>
        <div class="container-fluid p-0">
          <header></header>
          <div
            className="
              w-100
              hero-content
              d-flex
              flex-column
              align-items-center
              justify-content-center
            "
          ></div>
          <Nav className="main-nav navbar navbar-expand-md">
            <div className="container-fluid">
              <Button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </Button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul
                  className="
                    navbar-nav
                    mx-auto
                    mb-2 mb-lg-0
                    justify-content-lg-center
                  "
                >
                  <li className="nav-item">
                    <a className="nav-link active" href="#albums">
                      ALBUMS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#top-tracks">
                      TOP TRACKS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      ABOUT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Nav>

          {/*  */}
          <section classNameName="container" id="top-tracks">
            <h2>Top Tracks</h2>
            <div
              classNameName="
                top-tracks-cards
                row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6
                g-4
              "
            >
              {this.state.albums.slice(0, 12).map((album) => (
                <>
                  <div classNameName="col p-0 mb-5">
                    <div classNameName="card border-0 p-2 mx-1 h-100">
                      <div classNameName="w-100 position-relative">
                        <img
                          src={album.cover_big}
                          classNameName="card-img-top"
                          alt={album.title}
                        />
                        <Button classNameName="btn rounded-circle card-play-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            classNameName="bi bi-music-note-list"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                            <path fill-rule="evenodd" d="M12 3v10h-1V3h1z" />
                            <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
                            <path
                              fill-rule="evenodd"
                              d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
                            />
                          </svg>
                        </Button>
                      </div>
                      <div classNameName="card-body text-center p-1 d-flex flex-column justify-content-between">
                        <p classNameName="card-title fw-bold">${album.title}</p>
                        <p classNameName="card-text fw-bold">
                          ${album.release_date.slice(0, 4)}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </section>
        </div>
      </main>
    );
  }
}
