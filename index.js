import React, { Component } from 'react' 
import SideNav from '../../sideNav/TVShow'
import PropTypes from 'prop-types'

export default class ManagePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: show,
            rating: "3",
            url: "https://www.blank.com"
        }
    }

    tvShowSelected = () => {
        console.log("tvShowSelected");
    }

    tvShowDeleted = () => {
        console.log("tvShowDeleted");
    }

    saveTVshow = () => {
        console.log("saveTVShow");
    }
    render() {
        return (
            <div>
                <div>
                    <div id="tvShowListings"> 
                        <ul className="shows"> 
                            <li className="show1"><SideNav title={"Rurouni Kenshin"} selectHandler={this.tvShowSelected} allowDelete={true}/></li>
                            <li className="show2"><SideNav title={"My GF is a Gumiho"} selectHandler={this.tvShowSelected} allowDelete={true}/></li>
                        </ul>
                        <div className="new_edit_show">
                            <h2>New/Edit Show</h2>
                            <form className="form-example">
                                <div className="form-example">
                                    <label htmlFor="name">Enter your name: </label>
                                    <input type="text" onChange={this.setState(show, e.target.name)} name="name" id="name" required></input>
                                </div>
                                <div className="form-example">
                                    <label htmlFor="rating">Enter your rating: </label>
                                    <input type="text" onChange={this.setState(show, e.target.name)} name="rating" id="rating" required></input>
                                </div>
                                <div className="form-example">
                                    <label htmlFor="image">Enter your Image URL: </label>
                                    <input type="text" onChange={this.setState(show, e.target.name)} name="image" id="image" required></input>
                                </div>
                                <div className="form-example"></div>
                                <SideNav selectHandler={this.saveTVshow}></SideNav>
                                <input type="submit" onChange={this.setState(show, e.target.name)} className="deleteButton"></input>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ManagePage.propType = {
    title: PropTypes.string
};
