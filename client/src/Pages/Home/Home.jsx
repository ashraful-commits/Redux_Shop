import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { MdLocalShipping } from "react-icons/md";
import { BsCurrencyDollar,BsLockFill } from "react-icons/bs";
const Home = () => {
  return (
    <>
    <Container>
      <Row className=''>
        <Col>
        <div className="hero " style={{backgroundImage:"url('https://rossendaletrust.org/wp-content/uploads/2020/09/Sos-v-2020-768x480.jpg')",width:"100%",height:"50vh",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"top center"}}>
              <Row className=''>
                <Col md={4} className='d-flex align-items-center mt-5'>
                <div className='mt-5 pt-5 ps-5'>
                  <h1 className='h1 fw-bold  text-uppercase text-success'>Start Online Shop</h1>
                  <p className='mt-1 text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, inventore.</p>
                  <Button variant='green' className='btn btn-outline-success'>Start now</Button>
                 
                </div>
                </Col>
              </Row>
        </div>
        </Col>
      </Row>
      <Row className='mt-3 '>
        <Col md={4}>
          <div className='bg-white d-flex justify-content-evenly align-items-center py-2 px-2'>
            <div>
              < MdLocalShipping className='h1'/>
            </div>
            <div className='ps-4'>
              <h6 className='text-uppercase fw-bolder lh-1 d-inline-block'>free shipping</h6>
              <p className='lh-1  d-inline-block mb-0'>free shippingin under area now $59</p>
            </div>
          </div>
        </Col>
        <Col md={4}>
        <div className='bg-white d-flex justify-content-evenly align-items-center py-2 px-2'>
            <div>
              < BsCurrencyDollar className='h1'/>
            </div>
            <div className='ps-4'>
              <h6 className='text-uppercase fw-bolder lh-1 d-inline-block'>Money back gurrenty</h6>
              <p className='lh-1  d-inline-block mb-0'>free shippingin under area now $59</p>
            </div>
          </div>
        </Col>
        <Col md={4}>
        <div className='bg-white d-flex justify-content-evenly align-items-center py-2 px-2'>
            <div>
              < BsLockFill className='h1'/>
            </div>
            <div className='ps-4'>
              <h6 className='text-uppercase fw-bolder lh-1 d-inline-block'>payment sucured</h6>
              <p className='lh-1  d-inline-block mb-0'>free shippingin under area now $59</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col md={3}>
          <Card className='m-1'>
            <Card.Header className='bg-success text-white'>
              <Card.Title>Special offer</Card.Title>
            </Card.Header>
            <Card.Body>
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>
            <Card.Footer className='bg-success text-light'>
                <h6>Name of the product</h6>
                <h6>$500 <span>$350</span></h6>
            </Card.Footer>
          </Card>
          <Card className='m-1'>
            <Card.Header className='bg-success text-white'>
              <Card.Title>Special offer</Card.Title>
            </Card.Header>
            <Card.Body>
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>
            <Card.Footer className='bg-success text-light'>
                <h6>Name of the product</h6>
                <h6>$500 <span>$350</span></h6>
            </Card.Footer>
          </Card>
          <Card className='m-1'>
            <Card.Header className='bg-success text-white'>
              <Card.Title>Special offer</Card.Title>
            </Card.Header>
            <Card.Body>
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>
            <Card.Footer className='bg-success text-light'>
                <h6>Name of the product</h6>
                <h6>$500 <span>$350</span></h6>
            </Card.Footer>
          </Card>
          <Card className='m-1'>
            <Card.Header className='bg-success text-white'>
              <Card.Title>Special offer</Card.Title>
            </Card.Header>
            <Card.Body>
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>
            <Card.Footer className='bg-success text-light'>
                <h6>Name of the product</h6>
                <h6>$500 <span>$350</span></h6>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={9}>
          <Row className='m-3 bg-white'>
            <div className='border-bottom py-1 my-1'><h4 >All products</h4></div>
            <Col md={3}>
            <Card className=' mt-1 mb-2' style={{height:"35vh"}}>    
            <Card.Body >
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>        
          </Card>
            </Col>
            <Col md={3}>
            <Card className=' mt-1 mb-2' style={{height:"35vh"}}>    
            <Card.Body >
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>        
          </Card>
            </Col>
            <Col md={3}>
            <Card className=' mt-1 mb-2' style={{height:"35vh"}}>    
            <Card.Body >
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>        
          </Card>
            </Col>
            <Col md={3}>
            <Card className=' mt-1 mb-2' style={{height:"35vh"}}>    
            <Card.Body >
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>        
          </Card>
            </Col>
          
           
          
          </Row>
          <Row className='m-3 bg-white'>
            <div className='border-bottom py-1 my-1'><h4 >Catagory products</h4></div>
            <Col md={3}>
            <Card className=' mt-1 mb-2' style={{height:"35vh"}}>    
            <Card.Body >
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>        
          </Card>
            </Col>
            <Col md={3}>
            <Card className=' mt-1 mb-2' style={{height:"35vh"}}>    
            <Card.Body >
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>        
          </Card>
            </Col>
            <Col md={3}>
            <Card className=' mt-1 mb-2' style={{height:"35vh"}}>    
            <Card.Body >
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>        
          </Card>
            </Col>
            <Col md={3}>
            <Card className=' mt-1 mb-2' style={{height:"35vh"}}>    
            <Card.Body >
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>        
          </Card>
            </Col>
          
           
          
          </Row>
          <Row className='m-3 bg-white'>
            <div className='border-bottom py-1 my-1'><h4 >Brand products</h4></div>
            <Col md={3}>
            <Card className=' mt-1 mb-2' style={{height:"35vh"}}>    
            <Card.Body >
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>        
          </Card>
            </Col>
            <Col md={3}>
            <Card className=' mt-1 mb-2' style={{height:"35vh"}}>    
            <Card.Body >
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>        
          </Card>
            </Col>
            <Col md={3}>
            <Card className=' mt-1 mb-2' style={{height:"35vh"}}>    
            <Card.Body >
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>        
          </Card>
            </Col>
            <Col md={3}>
            <Card className=' mt-1 mb-2' style={{height:"35vh"}}>    
            <Card.Body >
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>        
          </Card>
            </Col>
          
           
          
          </Row>
          <Row className='m-3 bg-white'>
            <div className='border-bottom py-1 my-1'><h4 >Tag products</h4></div>
            <Col md={3}>
            <Card className=' mt-1 mb-2' style={{height:"35vh"}}>    
            <Card.Body >
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>        
          </Card>
            </Col>
            <Col md={3}>
            <Card className=' mt-1 mb-2' style={{height:"35vh"}}>    
            <Card.Body >
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>        
          </Card>
            </Col>
            <Col md={3}>
            <Card className=' mt-1 mb-2' style={{height:"35vh"}}>    
            <Card.Body >
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>        
          </Card>
            </Col>
            <Col md={3}>
            <Card className=' mt-1 mb-2' style={{height:"35vh"}}>    
            <Card.Body >
               <Image className='card-img' src="https://th.bing.com/th/id/R.ffc413c1f6d378270d14da11e679d77c?rik=O0i7l6gLipphsQ&pid=ImgRaw&r=0"/>
           
            </Card.Body>        
          </Card>
            </Col>
          
           
          
          </Row>
        </Col>
      </Row>
      </Container></>
  )
}

export default Home