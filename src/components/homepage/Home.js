import React, { Component } from 'react';

class Home extends Component {
    render () {
        return (
            <div>
                <div className="mainbody-section text-center">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-md-4">
                                
                                <div className="menu-item blue">
                                    <a href="#feature-modal" data-toggle="modal">
                                        <i className="fa fa-keyboard-o"></i>
                                        <p>Skills</p>
                                    </a>
                                </div>
                                
                                <div className="menu-item green">
                                    <a href="#portfolio-modal" data-toggle="modal">
                                        <i className="fa fa-suitcase"></i>
                                        <p>Portfolio</p>
                                    </a>
                                </div>
                                
                                <div className="menu-item light-red">
                                    <a href="#about-modal" data-toggle="modal">
                                        <i className="fa fa-user"></i>
                                        <p>About Me</p>
                                    </a>
                                </div>
                                
                            </div>
                            
                            <div className="col-md-4">
                                <div className="menu-item color">
                                    <a href="#service-modal" data-toggle="modal">
                                        <i className="fa fa-link"></i>
                                        <p>Links</p>
                                    </a>
                                </div>
                                    
                                <div className="menu-item light-orange">
                                    <a href="#team-modal" data-toggle="modal">
                                        <i className="fa fa-wrench"></i>
                                        <p>Components</p>
                                    </a>
                                </div>
                                
                                <div className="menu-item purple">
                                    <a href="#pricing-modal" data-toggle="modal">
                                        <i className="fa fa-usd"></i>
                                        <p>Pricing</p>
                                    </a>
                                </div>                        
                            </div>
                            
                            <div className="col-md-4">
                                
                                <div className="menu-item light-red">
                                    <a href="#contact-modal" data-toggle="modal">
                                        <i className="fa fa-envelope-o"></i>
                                        <p>Contact</p>
                                    </a>
                                </div>
                                
                                <div className="menu-item color">
                                    <a href="#clients-modal" data-toggle="modal">
                                        <i className="fa fa-comment-o"></i>
                                        <p>Clients</p>
                                    </a>
                                </div>
                                
                                <div className="menu-item blue">
                                    <a href="#news-modal" data-toggle="modal">
                                        <i className="fa fa-edit"></i>
                                        <p>Blog</p>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div>Designed by <a href="https://www.linkedin.com/in/mark-morales-lopez-102689101?trk=nav_responsive_tab_profile" target="_blank">Mark</a></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="section-modal modal fade" id="feature-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        
                        <div className="container">
                            <div className="row">
                                <div className="section-title text-center">
                                    <h3>List of Skills</h3>
                                    <p>Front End Developer</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="feature">
                                        <i className="fa fa-desktop"></i>
                                        <div className="feature-content">
                                            <h4>Web Design</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="feature">
                                        <i className="fa fa-html5"></i>
                                        <div className="feature-content">
                                            <h4>HTML</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="feature">
                                        <i className="fa fa-css3"></i>
                                        <div className="feature-content">
                                            <h4>CSS3</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="feature">
                                        <i className="fa fa-keyboard-o"></i>
                                        <div className="feature-content">
                                            <h4>JavaScript</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="feature">
                                        <i className="fa fa-diamond"></i>
                                        <div className="feature-content">
                                            <h4>Ruby on Rails</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="feature">
                                        <i className="fa fa-spinner"></i>
                                        <div className="feature-content">
                                            <h4>React JS</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="feature">
                                        <i className="fa fa-tablet"></i>
                                        <div className="feature-content">
                                            <h4>Bootstrap</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="feature">
                                        <i className="fa fa-tablet"></i>
                                        <div className="feature-content">
                                            <h4>Materialize</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>


                <div className="section-modal modal fade" id="portfolio-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        
                        <div className="container">
                            <div className="row">
                                <div className="section-title text-center">
                                    <h3>Our Portfolio</h3>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate</p>
                                </div>
                            </div>
                            <div className="row">
                                
                                <div className="col-md-4">
                                    <div className="portfolio-item">
                                        <img src="images/portfolio/1.png" className="img-responsive" alt="..." />
                                        <div className="portfolio-details text-center">
                                            <h4>Project Name</h4>
                                            <a href="#"><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="portfolio-item">
                                        <img src="images/portfolio/2.png" className="img-responsive" alt="..." />
                                        <div className="portfolio-details text-center">
                                            <h4>Project Name</h4>
                                            <a href="#"><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="portfolio-item">
                                        <img src="images/portfolio/3.png" className="img-responsive" alt="..." />
                                        <div className="portfolio-details text-center">
                                            <h4>Project Name</h4>
                                            <a href="#"><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="portfolio-item">
                                        <img src="images/portfolio/4.png" className="img-responsive" alt="..." />
                                        <div className="portfolio-details text-center">
                                            <h4>Project Name</h4>
                                            <a href="#"><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="portfolio-item">
                                        <img src="images/portfolio/5.png" className="img-responsive" alt="..." />
                                        <div className="portfolio-details text-center">
                                            <h4>Project Name</h4>
                                            <a href="#"><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="portfolio-item">
                                        <img src="images/portfolio/6.png" className="img-responsive" alt="..." />
                                        <div className="portfolio-details text-center">
                                            <h4>Project Name</h4>
                                            <a href="#"><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="portfolio-item">
                                        <img src="images/portfolio/7.png" className="img-responsive" alt="..." />
                                        <div className="portfolio-details text-center">
                                            <h4>Project Name</h4>
                                            <a href="#"><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="portfolio-item">
                                        <img src="images/portfolio/8.png" className="img-responsive" alt="..." />
                                        <div className="portfolio-details text-center">
                                            <h4>Project Name</h4>
                                            <a href="#"><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="portfolio-item">
                                        <img src="images/portfolio/9.png" className="img-responsive" alt="..." />
                                        <div className="portfolio-details text-center">
                                            <h4>Project Name</h4>
                                            <a href="#"><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="portfolio-item">
                                        <img src="images/portfolio/10.png" className="img-responsive" alt="..." />
                                        <div className="portfolio-details text-center">
                                            <h4>Project Name</h4>
                                            <a href="#"><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="portfolio-item">
                                        <img src="images/portfolio/11.png" className="img-responsive" alt="..." />
                                        <div className="portfolio-details text-center">
                                            <h4>Project Name</h4>
                                            <a href="#"><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="portfolio-item">
                                        <img src="images/portfolio/12.png" className="img-responsive" alt="..." />
                                        <div className="portfolio-details text-center">
                                            <h4>Project Name</h4>
                                            <a href="#"><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>



                <div className="section-modal modal fade" id="about-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        
                        <div className="container">
                            <div className="row">
                                <div className="section-title text-center">
                                    <h3>About Us</h3>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="about-text">
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. It has roots in a piece of classNameical Latin literature from 45 BC</p>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-6">
                                                <ul>
                                                    <li><i className="fa fa-check-square"></i>Sed ut perspiciatis unde omnis iste natus</li>
                                                    <li><i className="fa fa-check-square"></i>Nor again is there anyone who loves</li>
                                                    <li><i className="fa fa-check-square-o"></i>At vero eos et accusamus et iusto odio</li>
                                                    <li><i className="fa fa-check-square-o"></i>Et harum quidem rerum facilis</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <ul>
                                                    <li><i className="fa fa-check-square"></i>Nor again is there anyone who loves</li>
                                                    <li><i className="fa fa-check-square"></i>Nor again is there anyone who loves</li>
                                                    <li><i className="fa fa-check-square-o"></i>Et harum quidem rerum facilis</li>
                                                    <li><i className="fa fa-check-square-o"></i>At vero eos et accusamus et iusto odio</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <ul>
                                                    <li><i className="fa fa-check-square"></i>Nor again is there anyone who loves</li>
                                                    <li><i className="fa fa-check-square"></i>Nor again is there anyone who loves</li>
                                                    <li><i className="fa fa-check-square-o"></i>Et harum quidem rerum facilis</li>
                                                    <li><i className="fa fa-check-square-o"></i>At vero eos et accusamus et iusto odio</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="skill-shortcode">
                                
                                        
                                        <div className="skill">
                                            <p>Web Design</p>          
                                            <div className="progress">         
                                                <div className="progress-bar" role="progressbar"  data-percentage="60">
                                                    <span className="progress-bar-span" >60%</span>
                                                    <span className="sr-only">60% Complete</span>
                                                </div>
                                            </div>  
                                        </div>

                                    
                                        <div className="skill">
                                            <p>HTML & CSS</p>          
                                            <div className="progress">         
                                                <div className="progress-bar" role="progressbar"  data-percentage="95">
                                                    <span className="progress-bar-span" >95%</span>
                                                    <span className="sr-only">95% Complete</span>
                                                </div>
                                            </div>  
                                        </div>

                                        
                                        <div className="skill">
                                            <p>Wordpress</p>          
                                            <div className="progress">         
                                                <div className="progress-bar" role="progressbar"  data-percentage="80">
                                                    <span className="progress-bar-span" >80%</span>
                                                    <span className="sr-only">80% Complete</span>
                                                </div>
                                            </div>  
                                        </div>


                                        <div className="skill">
                                            <p>Joomla</p>          
                                            <div className="progress">         
                                                <div className="progress-bar" role="progressbar"  data-percentage="100">
                                                    <span className="progress-bar-span" >100%</span>
                                                    <span className="sr-only">100% Complete</span>
                                                </div>
                                            </div>  
                                        </div>


                                        <div className="skill">
                                            <p>Extension</p>          
                                            <div className="progress">         
                                                <div className="progress-bar" role="progressbar"  data-percentage="70">
                                                    <span className="progress-bar-span" >70%</span>
                                                    <span className="sr-only">70% Complete</span>
                                                </div>
                                            </div>  
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="custom-tab">
                                
                                        <ul className="nav nav-tabs nav-justified" role="tablist">
                                            <li className="active"><a href="#tab-1" role="tab" data-toggle="tab">Our Mission</a></li>
                                            <li><a href="#tab-2" role="tab" data-toggle="tab">Our Vission</a></li>
                                            <li><a href="#tab-3" role="tab" data-toggle="tab">Company History</a></li>
                                        </ul>

                                        <div className="tab-content">

                                            <div className="tab-pane active" id="tab-1">
                                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                                            </div>


                                            <div className="tab-pane" id="tab-2">
                                                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                                            </div>


                                            <div className="tab-pane" id="tab-3">
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>


                <div className="section-modal modal fade" id="service-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        
                        <div className="container">
                            <div className="row">
                                <div className="section-title text-center">
                                    <h3>Links</h3>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate</p>
                                </div>
                            </div>
                            <div className="row">
                                Fco
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="feature-2">
                                        <div className="media">
                                            <i className="fa fa-magic pull-left"></i>
                                            <div className="media-body">
                                                <h4 className="media-heading">Web Design</h4>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor. reprehenderit</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="feature-2">
                                        <div className="media">
                                            <i className="fa fa-css3 pull-left"></i>
                                            <div className="media-body">
                                                <h4 className="media-heading">HTML5 & CSS3</h4>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor. reprehenderit</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="feature-2">
                                        <div className="media">
                                            <i className="fa fa-wordpress pull-left"></i>
                                            <div className="media-body">
                                                <h4 className="media-heading">Wordpress Theme</h4>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor. reprehenderit</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="feature-2">
                                        <div className="media">
                                            <i className="fa fa-plug pull-left"></i>
                                            <div className="media-body">
                                                <h4 className="media-heading">Wordpress Plugin</h4>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor. reprehenderit</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="feature-2">
                                        <div className="media">
                                            <i className="fa fa-joomla pull-left"></i>
                                            <div className="media-body">
                                                <h4 className="media-heading">Joomla Template</h4>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor. reprehenderit</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="feature-2">
                                        <div className="media">
                                            <i className="fa fa-cube pull-left"></i>
                                            <div className="media-body">
                                                <h4 className="media-heading">Joomla Extension</h4>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor. reprehenderit</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>


                <div className="section-modal modal fade" id="pricing-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="section-modal modal fade" id="team-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        
                        <div className="container">
                            <div className="row">
                                <div className="section-title text-center">
                                    <h3>Our Expert Team</h3>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate</p>
                                </div>
                            </div>
                            <div className="row">
                                
                                <div className="col-md-3 col-sm-6">
                                    <div className="team-member">
                                        <img src="images/team/manage-1.png" className="img-responsive" alt="" />
                                        <div className="team-details">
                                            <h4>John Doe</h4>
                                            <div className="designation">Senior Web Developer</div>
                                            <ul style={{text_align: "center"}}>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="team-member">
                                        <img src="images/team/manage-2.png" className="img-responsive" alt="" />
                                        <div className="team-details">
                                            <h4>John Doe</h4>
                                            <div className="designation">Senior Web Developer</div>
                                            <ul style={{text_align: "center"}}>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="team-member">
                                        <img src="images/team/manage-3.png" className="img-responsive" alt="" />
                                        <div className="team-details">
                                            <h4>John Doe</h4>
                                            <div className="designation">Senior Web Developer</div>
                                            <ul style={{text_align: "center"}}>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="team-member">
                                        <img src="images/team/manage-4.png" className="img-responsive" alt="" />
                                        <div className="team-details">
                                            <h4>John Doe</h4>
                                            <div className="designation">Senior Web Developer</div>
                                            <ul style={{text_align: "center"}}>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="team-member">
                                        <img src="images/team/team-1.jpg" className="img-responsive" alt="" />
                                        <div className="team-details">
                                            <h4>John Doe</h4>
                                            <div className="designation">Senior Web Developer</div>
                                            <ul style={{text_align: "center"}}>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="team-member">
                                        <img src="images/team/team-2.jpg" className="img-responsive" alt="" />
                                        <div className="team-details">
                                            <h4>John Doe</h4>
                                            <div className="designation">Senior Web Developer</div>
                                            <ul style={{text_align: "center"}}>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-3 col-sm-6">
                                    <div className="team-member">
                                        <img src="images/team/team-3.jpg" className="img-responsive" alt="" />
                                        <div className="team-details">
                                            <h4>John Doe</h4>
                                            <div className="designation">Senior Web Developer</div>
                                            <ul style={{text_align: "center"}}>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-3 col-sm-6">
                                    <div className="team-member">
                                        <img src="images/team/team-4.jpg" className="img-responsive" alt="" />
                                        <div className="team-details">
                                            <h4>John Doe</h4>
                                            <div className="designation">Senior Web Developer</div>
                                            <ul style={{text_align: "center"}}>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>


                <div className="section-modal modal fade" id="news-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        
                        <div className="container">
                            <div className="row">
                                <div className="section-title text-center">
                                    <h3>From The Blog</h3>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="latest-post">
                                        <img src="images/blog-01.jpg" className="img-responsive" alt="" />
                                        <h4><a href="#">Standard Post with Image</a></h4>
                                        <div className="post-details">
                                            <ul>
                                                <li><i className="fa fa-user"></i> Auther : iThemesLab</li>
                                                <li><i className="fa fa-calendar"></i> 07 Aug, 2014</li>
                                                <li><i className="fa fa-tag"></i> Music</li>
                                            </ul>
                                        </div>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                                        
                                    </div>
                                </div>
                                
                                <div className="col-md-6">
                                    <div className="latest-post">
                                        <img src="images/blog-02.jpg" className="img-responsive" alt="" />
                                        <h4><a href="#">Standard Post with Image</a></h4>
                                        <div className="post-details">
                                            <ul>
                                                <li><i className="fa fa-user"></i> Auther : iThemesLab</li>
                                                <li><i className="fa fa-calendar"></i> 07 Aug, 2014</li>
                                                <li><i className="fa fa-tag"></i> Music</li>
                                            </ul>
                                        </div>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                                        
                                    </div>
                                </div>
                                
                                <div className="col-md-6">
                                    <div className="latest-post">
                                        <img src="images/blog-03.jpg" className="img-responsive" alt="" />
                                        <h4><a href="#">Standard Post with Image</a></h4>
                                        <div className="post-details">
                                            <ul>
                                                <li><i className="fa fa-user"></i> Auther : iThemesLab</li>
                                                <li><i className="fa fa-calendar"></i> 07 Aug, 2014</li>
                                                <li><i className="fa fa-tag"></i> Music</li>
                                            </ul>
                                        </div>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                                        
                                    </div>
                                </div>
                                
                                <div className="col-md-6">
                                    <div className="latest-post">
                                        <img src="images/blog-04.jpg" className="img-responsive" alt="" />
                                        <h4><a href="#">Standard Post with Image</a></h4>
                                        <div className="post-details">
                                            <ul>
                                                <li><i className="fa fa-user"></i> Auther : iThemesLab</li>
                                                <li><i className="fa fa-calendar"></i> 07 Aug, 2014</li>
                                                <li><i className="fa fa-tag"></i> Music</li>
                                            </ul>
                                        </div>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>


                <div className="section-modal modal fade contact" id="contact-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        
                        <div className="container">
                            <div className="row">
                                <div className="section-title text-center">
                                    <h3>Contact Me</h3>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate</p>
                                </div>
                            </div>
                            <div className="row">
                                
                                <div className="col-md-4">
                                    <div className="footer-contact-info">
                                        <h4>Contact info</h4>
                                        <ul>
                                            <li><strong>E-mail :</strong> marck.m.lopez@gmail.com</li>
                                            <li><strong>Phone :</strong> 214-458-3073</li>
                                            <li><strong>Mobile :</strong> 609-977-2489</li>
                                            <li><strong>Web :</strong> marckspage.herokuapp.com</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="footer-social text-center">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="footer-contact-info">
                                        <h4>Working Hours</h4>
                                        <ul>
                                            <li><strong>Mon-Wed :</strong> 9 am to 5 pm</li>
                                            <li><strong>Thurs-Fri :</strong> 12 pm to 10 pm</li>
                                            <li><strong>Sat :</strong> 9 am to 3 pm</li>
                                            <li><strong>Sunday :</strong> Closed</li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="row" style={{padding_top: "80px"}}>
                                <div className="col-md-12">
                                    <form name="sentMessage" id="contactForm" noValidate>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name." />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address." />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                                <div className="form-group">
                                                    <input type="tel" className="form-control" placeholder="Your Phone *" id="phone" required data-validation-required-message="Please enter your phone number." />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <textarea className="form-control" placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="col-lg-12 text-center">
                                                <div id="success"></div>
                                                <button type="submit" className="btn btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>


                <div className="section-modal modal fade contact" id="clients-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        
                        <div className="container">
                            <div className="row">
                                <div className="section-title text-center">
                                    <h3>Client's Speech About Us</h3>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate</p>
                                </div>
                            </div>
                            <div className="row">
                                
                                <div className="col-md-6">
                                    <div className="clients">
                                        <img src="images/team/manage-1.png" className="img-responsive" alt="..." />
                                        <h4>John Doe</h4>
                                        <div className="speech">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-6">
                                    <div className="clients">
                                        <img src="images/team/manage-2.png" className="img-responsive" alt="..." />
                                        <h4>John Doe</h4>
                                        <div className="speech">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-6">
                                    <div className="clients">
                                        <img src="images/team/manage-3.png" className="img-responsive" alt="..." />
                                        <h4>John Doe</h4>
                                        <div className="speech">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-6">
                                    <div className="clients">
                                        <img src="images/team/manage-4.png" className="img-responsive" alt="..." />
                                        <h4>John Doe</h4>
                                        <div className="speech">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default Home