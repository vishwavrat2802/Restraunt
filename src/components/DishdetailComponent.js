import React, { Component } from 'react';
import { Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props)
    };

    renderDish(dish) {
        return(
            <Card width="100%">
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
            </Card>
        )
    }

    renderComments(comments){
        var allcomments = null;
        allcomments = comments.map((cmnt) => {
            return(
                <div key={cmnt.id}>
                    <ul className="list-unstyled">
                        <li>{cmnt.comment}</li>
                        <li>--{cmnt.author},{cmnt.date}</li>
                    </ul>
                </div>
            )
        });
        if(allcomments!=null){
            return(allcomments);
        }
        else{
            return(<div></div>);
        }
    }

    render() {
        const dish = this.props.displayDish;
        if(dish != null){
            return(
                <div className="row">
                    <div class="col-12 col-md-5 m-1">
                        {this.renderDish(dish)};
                    </div>
                    <div class="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            )
        }

        else{
            return(<div></div>)
        }
    };
};
export default DishDetail;