import React from 'react'
import './SinglePage.css'
import TitleSection from '../../components/sections/TitleSection/TitleSection'

export default function SinglePage() {
  return (
    <div>
      <TitleSection text={'Single page'} />
      <div className="page-single movie-single movie_single">
        <div className="container">
          <div className="row ipad-width2">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="movie-img sticky-sb">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/block-buster-71db3.appspot.com/o/uploads%2Fmv-it10.jpg?alt=media&token=1c8648ab-db44-4b87-896a-cca001587371"
                  alt=""
                />
                <div className="movie-btn">
                  <div className="btn-transform transform-vertical red">
                    <div>
                      <a href="#" className="item item-1 redbtn">
                        {' '}
                        <i className="ion-play" /> Watch Trailer
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.youtube.com/embed/o-0hcF97wy0"
                        className="item item-2 redbtn fancybox-media hvr-grow"
                      >
                        <i className="ion-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="movie-single-ct main-content">
                <h1 className="bd-hd">
                  Skyfall: Quantum of Spectre <span>2015</span>
                </h1>
                <div className="social-btn">
                  <a href="#" className="parent-btn">
                    <i className="ion-heart" /> Add to Favorite
                  </a>
                  <div className="hover-bnt">
                    <a href="#" className="parent-btn">
                      <i className="ion-android-share-alt" />
                      share
                    </a>
                    <div className="hvr-item">
                      <a href="#" className="hvr-grow">
                        <i className="ion-social-facebook" />
                      </a>
                      <a href="#" className="hvr-grow">
                        <i className="ion-social-twitter" />
                      </a>
                      <a href="#" className="hvr-grow">
                        <i className="ion-social-googleplus" />
                      </a>
                      <a href="#" className="hvr-grow">
                        <i className="ion-social-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="movie-rate">
                  <div className="rate">
                    <i className="ion-android-star" />
                    <p>
                      <span>8.1</span> /10
                      <br />
                      <span className="rv">56 Reviews</span>
                    </p>
                  </div>
                  <div className="rate-star">
                    <p>Rate This Movie: </p>
                    <i className="ion-ios-star" />
                    <i className="ion-ios-star" />
                    <i className="ion-ios-star" />
                    <i className="ion-ios-star" />
                    <i className="ion-ios-star" />
                    <i className="ion-ios-star" />
                    <i className="ion-ios-star" />
                    <i className="ion-ios-star" />
                    <i className="ion-ios-star-outline" />
                  </div>
                </div>
                <div className="movie-tabs">
                  <div className="tabs">
                    <ul className="tab-links tabs-mv">
                      <li className="active">
                        <a href="#">Overview</a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab active">
                        <div className="row">
                          <div className="col-md-8 col-sm-12 col-xs-12">
                            <p>
                              Tony Stark creates the Ultron Program to protect
                              the world, but when the peacekeeping program
                              becomes hostile, The Avengers go into action to
                              try and defeat a virtually impossible enemy
                              together. Earths mightiest heroes must come
                              together once again to protect the world from
                              global extinction.
                            </p>
                            <div className="title-hd-sm">
                              <h4>Videos & Photos</h4>
                              <a href="#" className="time">
                                All 5 Videos & 245 Photos{' '}
                                <i className="ion-ios-arrow-right" />
                              </a>
                            </div>
                            <div className="mvsingle-item ov-item">
                              <a
                                className="img-lightbox"
                                data-fancybox-group="gallery"
                                href="#"
                              >
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/block-buster-71db3.appspot.com/o/uploads%2Fmv-it10.jpg?alt=media&token=1c8648ab-db44-4b87-896a-cca001587371"
                                  alt=""
                                />
                              </a>
                              <div className="vd-it">
                                <img
                                  className="vd-img"
                                  src="https://firebasestorage.googleapis.com/v0/b/block-buster-71db3.appspot.com/o/uploads%2Fmv-it10.jpg?alt=media&token=1c8648ab-db44-4b87-896a-cca001587371"
                                  alt=""
                                />
                                <a
                                  className="fancybox-media hvr-grow"
                                  href="https://www.youtube.com/embed/o-0hcF97wy0"
                                >
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/block-buster-71db3.appspot.com/o/uploads%2Fmv-it10.jpg?alt=media&token=1c8648ab-db44-4b87-896a-cca001587371"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
