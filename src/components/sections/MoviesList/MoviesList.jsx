import React from 'react'
import './MoviesList.css'
import Card from '../../Card/Card'
import FilterBlock from '../../FilterBlock/FilterBlock'

export default function MoviesList() {
  return (
    <div className="page-single">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <FilterBlock />
            <div className="flex-wrap-movielist mv-grid-fw">
              <Card
                name={'Film 1'}
                imgLink={
                  'https://firebasestorage.googleapis.com/v0/b/block-buster-71db3.appspot.com/o/uploads%2Fmv-it10.jpg?alt=media&token=1c8648ab-db44-4b87-896a-cca001587371'
                }
                readMore={'#'}
                averageRate={'8/1'}
              />
              <Card
                name={'Film 1'}
                imgLink={
                  'https://firebasestorage.googleapis.com/v0/b/block-buster-71db3.appspot.com/o/uploads%2Fmv-it10.jpg?alt=media&token=1c8648ab-db44-4b87-896a-cca001587371'
                }
                readMore={'#'}
                averageRate={'8/1'}
              />
              <Card
                name={'Film 1'}
                imgLink={
                  'https://firebasestorage.googleapis.com/v0/b/block-buster-71db3.appspot.com/o/uploads%2Fmv-it10.jpg?alt=media&token=1c8648ab-db44-4b87-896a-cca001587371'
                }
                readMore={'#'}
                averageRate={'8/1'}
              />
              <Card
                name={'Film 1'}
                imgLink={
                  'https://firebasestorage.googleapis.com/v0/b/block-buster-71db3.appspot.com/o/uploads%2Fmv-it10.jpg?alt=media&token=1c8648ab-db44-4b87-896a-cca001587371'
                }
                readMore={'#'}
                averageRate={'8/1'}
              />
              <Card
                name={'Film 1'}
                imgLink={
                  'https://firebasestorage.googleapis.com/v0/b/block-buster-71db3.appspot.com/o/uploads%2Fmv-it10.jpg?alt=media&token=1c8648ab-db44-4b87-896a-cca001587371'
                }
                readMore={'#'}
                averageRate={'8/1'}
              />
            </div>
            <div className="topbar-filter">
              <span>Movies per page:</span>
              <select>
                <option value="range">20 Movies</option>
                <option value="saab">10 Movies</option>
              </select>

              <div className="pagination2">
                <span>Page 1 of 2:</span>
                <a className="active" href="#">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">...</a>
                <a href="#">78</a>
                <a href="#">79</a>
                <a href="#">
                  <i className="ion-arrow-right-b" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
