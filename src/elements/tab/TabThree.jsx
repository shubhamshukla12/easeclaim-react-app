// import React, { Component } from 'react'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const TabOne = [
//     {
//         images: 'assets/images/blogs/img/blog-1.png',
//         title: 'List of Diseases Covered by Bajaj Allianz Health Insurance Plans',
//         category: '5 june 2022',
//         link:""

//     },
//     {
//         images: 'assets/images/blogs/img/blog-3.png',
//         title: 'List of Diseases Covered by Bajaj Allianz Health Insurance Plans',
//         category: '5 june 2022',
//         link:""

//     },

//     {
//         images: 'assets/images/blogs/img/blog-4.png',
//         title: 'List of Diseases Covered by Bajaj Allianz Health Insurance Plans',
//         category: '5 june 2022',
//         link:""
//     },

// ]

// const TabTwo = [
//     {
//         images: 'assets/images/blogs/img/blog-1.png',
//         title: 'List of Diseases Covered by Bajaj Allianz Health Insurance Plans',
//         category: '5 june 2022',
//         link:""

//     },
//     {
//         images: 'assets/images/blogs/img/blog-3.png',
//         title: 'List of Diseases Covered by Bajaj Allianz Health Insurance Plans',
//         category: '5 june 2022',
//         link:""

//     },

//     {
//         images: 'assets/images/blogs/img/blog-4.png',
//         title: 'List of Diseases Covered by Bajaj Allianz Health Insurance Plans',
//         category: '5 june 2022',
//         link:""
//     },

// ]

// class TabStyleThree extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             tab1: 0,
//             tab2: 0,
//             isOpen: false,
//         };
//     }
//     render() {
//         const { column } = this.props;
//         const { tab1, tab2, isOpen } = this.state;
//         return (
//             <div>
//                 <Tabs>
//                     <div className="row text-center">
//                         <div className="col-lg-12">
//                             <div className="tablist-inner">
//                                 <TabList className="pv-tab-button text-center mt--0">
//                                     <Tab><span>Blog 1</span></Tab>
//                                     <Tab><span>Blog 2</span></Tab>

//                                 </TabList>
//                             </div>
//                         </div>
//                     </div>

//                     <TabPanel className="row row--35">
//                         {TabOne.map((value, index) => (
//                             <div className={`${column}`} key={index}>
//                                 {isOpen && (
//                                     <Lightbox
//                                         mainSrc={TabOne[tab1].bigImage}
//                                         nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
//                                         prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
//                                         onCloseRequest={() => this.setState({ isOpen: false })}
//                                         onMovePrevRequest={() =>
//                                             this.setState({
//                                                 tab1: (tab1 + TabOne.length - 1) % TabOne.length,
//                                             })
//                                         }
//                                         onMoveNextRequest={() =>
//                                             this.setState({
//                                                 tab1: (tab1 + 1) % TabOne.length,
//                                             })
//                                         }
//                                         imageLoadErrorMessage='Image Loading ...'
//                                         enableZoom={false}
//                                     />
//                                 )}
//                                 <div className='container'>

//                                 {/* <div className="item-portfolio-static">
//                                     <div >
//                                         <div className="portfolio-static">
//                                             <div className="thumbnail-inner">
//                                                 <div className="thumbnail">
//                                                     <a href="#portfolio-details">
//                                                         <img src={`assets/images/aboutus/team${value.image}.png`} alt="Portfolio Images"/>

//                                                  </a>
//                                                  <Card sx={{ maxWidth: 345 }}>
//                                                     <CardMedia
//                                                         component="img"
//                                                         alt="green iguana"
//                                                         height="140"
//                                                         image={`assets/images/aboutus/team${value.image}.png`}
//                                                     />
//                                                     <CardContent>
//                                                         <Typography gutterBottom variant="h5" component="div">
//                                                             {value.title}
//                                                         </Typography>
//                                                         <Typography variant="body2" color="text.secondary">
//                                                             {value.category}
//                                                         </Typography>
//                                                     </CardContent>

//                                                 </Card>
//                                                 </div>

//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div> */}

//                                    <div className="row">
//                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
//                             <div className="blog blog-style--1">
//                                 <div className="blogimg-image">

//                                         <img  src={value.images} alt="Blog Images"/>

//                                 </div>
//                                 <div className="content">

//                                     <h5 className="title">{value.title}</h5>
//                                     <p className="blogtype mb-1">{value.category}</p>
//                                     <div className="blog-btn">
//                                    <p> Barely any person has remained unaffected due to rising health <span style={{color:"blue",fontSize:"18px"}}>Read More</span></p>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                                    </div>

//                                     </div>

//                             </div>
//                         ))}
//                     </TabPanel>

//                     <TabPanel className="row row--35">
//                         {TabTwo.map((value, index) => (
//                             <div className={`${column}`} key={index}>
//                                 {isOpen && (
//                                     <Lightbox
//                                         mainSrc={TabTwo[tab2].bigImage}
//                                         nextSrc={TabTwo[(tab2 + 1) % TabTwo.length]}
//                                         prevSrc={TabTwo[(tab2 + TabTwo.length - 1) % TabTwo.length]}
//                                         onCloseRequest={() => this.setState({ isOpen: false })}
//                                         onMovePrevRequest={() =>
//                                             this.setState({
//                                                 tab2: (tab2 + TabTwo.length - 1) % TabTwo.length,
//                                             })
//                                         }
//                                         onMoveNextRequest={() =>
//                                             this.setState({
//                                                 tab2: (tab2 + 1) % TabTwo.length,
//                                             })
//                                         }
//                                         imageLoadErrorMessage='Image Loading ...'
//                                         enableZoom={false}
//                                     />
//                                 )}
//                                  <div className='container'>
//                                  <div className="row">
//                                 <div className="col-lg-4 ">
//                                 <div className="">
//                                     <div >
//                                         <div className="portfolio-static">
//                                             <div className="thumbnail-inner">
//                                                 <div className="thumbnail">
//                                                 <Card sx={{ Width: 400,height: 294}}>
//                                                     <CardMedia
//                                                         component="img"
//                                                         alt="green iguana"
//                                                         height="140"
//                                                         image={`assets/images/aboutus/team${value.image}.png`}
//                                                     />
//                                                     <CardContent>
//                                                         <Typography gutterBottom variant="h5" component="div">
//                                                             {value.title}
//                                                         </Typography>
//                                                         <Typography variant="body2" color="text.secondary">
//                                                             {value.category}
//                                                         </Typography>
//                                                     </CardContent>

//                                                 </Card>
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                                 </div>
//                                 </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </TabPanel>

//                 </Tabs>
//             </div>
//         )
//     }
// }

// export default TabStyleThree
