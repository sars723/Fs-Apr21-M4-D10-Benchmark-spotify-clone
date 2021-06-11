import React, { Component } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

class Albums extends Component {
  state = {
    albums: [],
  };
  componentDidMount = () => {
    this.fetchData();
  };
  fetchData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/2108/albums",
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
      /* .then((response) => response.json()) */
      /* .then((fetchedAlbums) => {
              populateAlbums(fetchedAlbums.data);
            }) */
    } catch (err) {
      console.log(err);
    }

    /*  .catch((error) => console.log(error)); */
  };
  render() {
    return (
      <Container fluid id="albums">
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
      </Container>
    );
  }
}
export default Albums;
