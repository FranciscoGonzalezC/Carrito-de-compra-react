import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Productos </div>
                <div className="filter-sort">
                    Order {" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-size">
                    Filtrar {" "}
                <select value={this.props.size} onChange={this.props.filterProducts}>
                    <option value="">Todos</option>
                    <option value="250cc">250cc</option>
                    <option value="500cc">500cc</option>
                    <option value="750cc">750cc</option>
                    <option value="1L">1L</option>
                    <option value="2L">2L</option>
                    <option value="3L">3L</option>
                </select>
                </div>
            </div>
        )
    }
}
