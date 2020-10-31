import React, { Component } from 'react';
import Display from './DishdetailComponent';
import { Card,CardBody,CardImg,CardImgOverlay,CardTitle } from 'reactstrap';

class menu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedDish:null
        };
    };

    selectDish(dish){
        this.setState({selectedDish:dish});
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-2">
                <Card onClick={() => this.selectDish(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>
                          {
                              dish.name
                          }
                      </CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
            // <div  className="col-12 col-md-5 m-1">
            //     <Card key={dish.id}
            //       onClick={() => this.onDishSelect(dish)}>
            //       <CardImg width="100%" src={dish.image} alt={dish.name} />
            //       <CardImgOverlay>
            //           <CardTitle>{dish.name}</CardTitle>
            //       </CardImgOverlay>
            //     </Card>
            //   </div>
        });

        return(

            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <Display displayDish = {this.state.selectedDish}/>
            </div>

        );
    }
}


export default menu;