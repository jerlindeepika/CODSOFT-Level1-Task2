import React from 'react';
import { Navbar, Nav, Container, Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { TextField, Button, Grid } from "@mui/material";

import './App.css';
import { FaGithub, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';


const App = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const API_ENDPOINT = "";

  const onSubmit = (data) => {
    // Send data to the API
    fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        // Handle the response from the API
        if (response.ok) {
          console.log("Form data submitted successfully");
        } else {
          console.log("Error submitting form data");
        }
      })
      .catch((error) => {
        console.log("Error submitting form data:", error);
      });
  };

  return (
    <div>
     <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#">
      <img
        style={{ borderRadius: '100px' }}
        src="https://static.vecteezy.com/system/resources/previews/012/905/370/original/organic-natural-and-healthy-olive-tree-silhouette-logo-isolated-on-white-background-modern-green-plant-icon-sign-design-artwork-premium-quality-oil-product-logotype-flat-emblem-illustration-free-vector.jpg" 
        width="50"
        height="50"
        alt="Your Logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Features</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


      <Carousel style={{ maxHeight: '400px' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.vogue.in/photos/5ce41d39b40d26fb48d6b6dd/16:9/w_1280,c_limit/Skincare-and-haircare-products-with-natural-ingredients.jpg"
            alt="First slide"
            style={{ maxHeight: '850px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3 style={{color:'white'}}>Welcome to Our Bee Naturals Store</h3>
            <p style={{color:'white'}}>Served By Nature</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        
          <img
            className="d-block w-100"
            src="https://assets.vogue.in/photos/5ce429dc1dc267c21bc78830/16:9/w_1920,h_1080,c_limit/What-to-keep-in-mind-when-using-natural-beauty-products-and-concoctions.jpg"
            alt="Second slide"
            style={{ maxHeight: '850px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        
        <img
          className="d-block w-100"
          src="https://rare-gallery.com/uploads/posts/853482-White-background-Brown-haired-Face-Glance-Hands.jpg"
          alt="Second slide"
          style={{ maxHeight: '850px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://myeclatshop.com/cdn/shop/articles/shutterstock_2261489503.jpg?v=1686648772"
            alt="Third slide"
            style={{ maxHeight: '850px', objectFit: 'cover' }}
          />
          </Carousel.Item>

          <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://images4.alphacoders.com/886/886323.jpg"
            alt="Third slide"
            style={{ maxHeight: '850px', objectFit: 'cover' }}
          />
          </Carousel.Item>

          <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/2317436.jpg"
            alt="Third slide"
            style={{ maxHeight: '850px', objectFit: 'cover' }}
          />
          </Carousel.Item>

          <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp3065605.jpg"
            alt="Third slide"
            style={{ maxHeight: '850px', objectFit: 'cover' }}
          />
          </Carousel.Item>




                  
      </Carousel>
      

      <section className="about-section ">
        <Container>
          <div className="row">
            <div className="col-lg-6">
              <h2 className="section-heading">About Us</h2>
              <p className="about-content">
              We are proud of the quality and consistency of the product and service provided to our customers and we are here to make your online shopping experience excellent. On our online store, there is a great selection. With many years of experience in the direct relationship with the manufacturer's supplier and our customers, we always show our profession so that you can feel better when you shop here.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid rounded-circle"
                src="https://static.vecteezy.com/system/resources/thumbnails/007/558/975/small/nature-organic-product-logo-with-hand-and-leaf-design-template-free-vector.jpg"
                alt="About Us"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="projects-section my-5">
        <Container>
          <h2 className="section-heading text-center">Our Products</h2>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <Card>
                <Card.Img variant="top" src="https://www.creamandcoco.com/cdn/shop/products/IMG-2483_1000x1000.jpg?v=1574964886" />
                <Card.Body>
                  <Card.Title>Sugar sand face polish</Card.Title>
                  <Card.Text>
                    With a goodness of Honey and Butter Cream and coco
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-4 mb-4">
              <Card>
                <Card.Img variant="top" src="https://honeynbeaute.com/cdn/shop/products/GlowFaceCream_2of2.jpg?v=1669453754" />
                <Card.Body>
                  <Card.Title>Glow Face Cream</Card.Title>
                  <Card.Text>
                  With a goodness of carrot juice, almond oil, mango butter,etc..,
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-4 mb-4">
              <Card>
                <Card.Img variant="top" src="https://luvibeauty.com/cdn/shop/products/Emily_Stryker_-_face_cream_2.5oz._2_900x.jpg?v=1597606374" />
                <Card.Body>
                  <Card.Title>Face Cream</Card.Title>
                  <Card.Text>
                    With a goodness of almond and avacado which enriches your skin
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <div className="contact-container">
  <div className="card-container" style={{width:'100%', }}>
    <div className="title">Contact Us</div>
    <div>
      <div className="subtitle">Inspections</div>
      <span className="text-no">93654-74322 | info@inspection.com</span>
    </div>
    <div>
      <div className="subtitle">Franchising</div>
      <span className="text-no">62234-54393 | info@franchising.com</span>
    </div>
    <div>
      <div className="subtitle">Vendors</div>
      <span className="text-no">99342-45673 | info@vendor.com</span>
    </div>
  </div>
  <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          {/* Name field */}
          <TextField
            label="Name"
            {...register("name", { required: true })}
            error={!!errors.name}
            helperText={errors.name ? "Name is required" : ""}
            fullWidth
            placeholder="Full Name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Email field */}
          <TextField
            label="Email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
            error={!!errors.email}
            helperText={errors.email ? "Invalid email address" : ""}
            fullWidth
            placeholder="xyz@abc.com"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Phone number field */}
          <TextField
            label="Phone Number"
            {...register("phoneNumber", {
              required: true,
              pattern: /^[0-9]{10}$/i
            })}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber ? "Invalid phone number" : ""}
            fullWidth
            placeholder="1234567890"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* ZIP code field */}
          <TextField
            label="ZIP Code"
            {...register("zipCode", {
              required: true,
              pattern: /^[0-9]{5}$/i
            })}
            error={!!errors.zipCode}
            helperText={errors.zipCode ? "Invalid zip code" : ""}
            fullWidth
            placeholder="XXXXX"
          />
        </Grid>
        <Grid item xs={12}>
          {/* Message field */}
          <TextField
            label="Message"
            multiline
            rows={4}
            {...register("message", { required: true })}
            error={!!errors.message}
            helperText={errors.message ? "Message is required" : ""}
            fullWidth
            placeholder="Please type it in here..."
          />
        </Grid>
        <Grid item xs={12}>
          {/* Submit button */}
          <Button
            type="submit"
            variant="contained"
            className="button"
            style={{ background: "#005981" }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
</div>


      
      <section className="contact-section my-5">
        <Container>
          <h2 className="section-heading text-center">Social Media Links</h2>
          <div className="text-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
          </div>
        </Container>
      </section>

      <footer className="bg-dark text-light text-center p-3">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;