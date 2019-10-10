import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div className="agileits-navi_search">
                <form action="#" method="post">
                    <select id="agileinfo-nav_search" name="agileinfo_search" className="border" required>
                        <option value>All Categories</option>
                        <option value="Food Drive">Food Drive</option>
                        <option value="Animal Shelter">Animal Shelter</option>
                        <option value="Homeless Drive">Homeless Drive</option>
                        <option value="Clothing Drive">Clothing Drive</option>
                        <option value="Disaster Drive">Disaster Drive</option>
                        <option value="School Suppliesr">School Suppliesr</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default Category;