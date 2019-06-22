import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import Like from "./common/Like.jsx";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {},
    {}
  ];
  render() {
    return (
      <table className="table table-dark">
        <TableHeader
          columns={this.columns}
          sortColumn={this.props.sortColumn}
          onSort={this.props.onSort}
        />
        <tbody>
          {this.props.movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>

              <td>
                <Like
                  liked={movie.liked}
                  onClick={() => this.props.handleLike(movie)}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => this.props.deletemovie(movie._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
