import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  let [data, setdata] = useState([]);

  useEffect(() => {
    // console.log('twinkal');
    // alert('twinkal');
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        setdata(response.data.results)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  return (
    <div className="App">
      <h1 className='text'>The Rick and Morty API</h1>
      <div className=''></div>
      <div className='bg'>
        <Container>
          <Row>

            {
              data.map((ele, ind) => {
                return (
                  <>
                    <Col lg='6' >
                      <div className='bg_1'>
                        <div className='text_1 d-flex'>
                          <div className='img_item '>
                            <img src={ele.image}></img>
                          </div>
                          <span className='text_3'>
                            <h5 className='name'>{ele.name}</h5>
                            <div className='d-flex status'>
                              <div className='dots' style={{ backgroundColor: ele.status === "Alive" ? 'green' : (ele.status === 'Dead') ? 'red' : 'gray' }}></div>
                              <p>{ele.status} - <span>{ele.species}</span></p>
                            </div>
                            <p className='loc'>Last known location:</p>
                            <p className='loc_name'>{ele.location.name}</p>
                            <p className='Gender'>Gender:</p>
                            <p className='gen'>{ele.gender}</p>
                          </span>
                        </div>
                      </div>
                    </Col>

                  </>
                )
              })
            }
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
