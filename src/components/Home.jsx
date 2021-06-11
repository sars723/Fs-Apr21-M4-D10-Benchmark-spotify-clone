import React, { Component } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../css/Home.css";
import MenuHomePage from "./MenuHomePage";

class Albums extends Component {
  state = {
    albums: [],
  };
  componentDidMount = () => {
    this.fetchData("throwbackthursday");
  };
  fetchData = async (query) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query,
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
      <>
        {<MenuHomePage />}
        <section class="container" id="throwback">
          <h2>#THROWBACKTHURSDAY</h2>
          <div
            className="
          throwback-cards
          row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6
          g-4
        "
          >
            {this.state.albums.slice(12, 24).map((album) => (
              <div className="col p-0 mb-3">
                <div class="card border-0 p-2 mx-1 h-100">
                  <img
                    src={album.artist.picture_big}
                    className="card-img-top"
                    alt={album.title}
                  />
                  <div className="card-body text-center p-1">
                    <p className="card-title fw-bold">{album.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/*  <section class="container mt-5" id="throwback">
          <h2>#Classifiche</h2>
          <div
            className="
          throwback-cards
          row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6
          g-4
        "
          >
            {this.state.albums.slice(12, 24).map((album) => (
              <div className="col p-0 mb-3">
                <div class="card border-0 p-2 mx-1 h-100">
                  <img
                    src={album.artist.picture_big}
                    className="card-img-top"
                    alt={album.title}
                  />
                  <div className="card-body text-center p-1">
                    <p className="card-title fw-bold">{album.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}
      </>
      /*  <Container fluid id="albums">
        <h2>Albums</h2>
        <Row>
          {this.state.albums.map((album) => (
            <Col xs="12" sm="6" md="4" lg="3" xl="2">
              <Card border="light">
                <Card.Img variant="top" src={album.cover_big} />
                <Card.Body>
                  <p className="card-title fw-bold">${album.title}</p>
                  <p class="card-text fw-bold">
                    ${album.release_date.slice(0, 4)}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container> */
    );
  }
}
export default Albums;
