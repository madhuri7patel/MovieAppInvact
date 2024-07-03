import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, editMovie } from "../redux/movieSlice";
import { useNavigate, useParams } from "react-router-dom";
import Input from "./Input/Input";

const AddEditMoviePage = () => {
  const movies = useSelector((state) => state.movies.list);
  const [formFields, setFormFields] = useState({
    title: "",
    description: "",
    releaseYear: "",
    genre: "",
  });
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const params = useParams();

  const objectAreValid = (obj) => {
    return Object.keys(obj).every((key) => obj[key] !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all the field is filled or not
    if (objectAreValid(formFields)) {
      if (params.id) {
        dispatch(
          editMovie({
            id: params.id,
            ...formFields,
          })
        );
      } else {
        dispatch(
          addMovie({
            id: movies.length + 1,
            ...formFields,
          })
        );
      }

      Navigate("/");
    }
  };

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (params.id) {
      const movieData = movies.find((movie) => movie.id == params.id);
      if (movieData) {
        const { title, description, releaseYear, genre } = movieData;

        setFormFields({
          title,
          description,
          releaseYear,
          genre,
        });
      }
    }
  }, [params]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: 500,
        }}
      >
        <Input
          label="Title"
          name="title"
          value={formFields.title}
          onChange={handleChange}
        />
        <Input
          label="Description"
          name="description"
          value={formFields.description}
          onChange={handleChange}
        />
        <Input
          label="ReleaseYear"
          name="releaseYear"
          value={formFields.releaseYear}
          onChange={handleChange}
        />
        <Input
          label="Genre"
          name="genre"
          value={formFields.genre}
          onChange={handleChange}
        />

        <div className="button-group" style={{ justifyContent: "center" }}>
          <button type="submit" className="edit-button">
            {params.id ? "Edit" : "Add"}
          </button>
          <button className="delete-button" onClick={() => Navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditMoviePage;
