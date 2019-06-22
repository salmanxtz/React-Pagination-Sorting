import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import Like from "./common/Like.jsx";
import TableBody from "./common/tableBody.jsx";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like
          liked={movie.liked}
          onClick={() => this.props.handleLike(movie)}
        />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-danger"
          onClick={() => this.props.deletemovie(movie._id)}
        >
          delete
        </button>
      )
    }
  ];
  render() {
    const { movies, handleLike, deletemovie } = this.props;
    return (
      <table className="table table-dark">
        <TableHeader
          columns={this.columns}
          sortColumn={this.props.sortColumn}
          onSort={this.props.onSort}
        />
        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;
