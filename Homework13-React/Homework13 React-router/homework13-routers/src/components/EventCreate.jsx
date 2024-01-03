import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useRouteLoaderData, Form, redirect } from "react-router-dom";
import { getAuthToken } from "../util/auth";

const EventCreate = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const onChangeImageHandler = (event) => {
    setImage(event.target.value);
  };

  const onChangeDateHandler = (event) => {
    setDate(event.target.value);
  };

  const onChangeDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const onChangeLocationHandler = (event) => {
    setLocation(event.target.value);
  };

  return (
    <Form method="post">
      <Stack alignItems="center" width="80%" rowGap={5} mt={5}>
        <TextField
          label="Event Title"
          variant="standard"
          fullWidth
          value={title}
          onChange={onChangeTitleHandler}
          name="title"
        />
        <TextField
          label="Event Image"
          variant="standard"
          placeholder="https://..."
          fullWidth
          value={image}
          onChange={onChangeImageHandler}
          name="image"
        />
        <TextField
          label="Event Date"
          variant="standard"
          placeholder="dd.MM.YYYY"
          fullWidth
          value={date}
          onChange={onChangeDateHandler}
          name="date"
        />
        <TextField
          label="Location"
          variant="standard"
          placeholder="Location"
          fullWidth
          value={location}
          onChange={onChangeLocationHandler}
          name="location"
        />
        <TextField
          label="Event Description"
          variant="standard"
          multiline
          rows={3}
          fullWidth
          value={description}
          onChange={onChangeDescriptionHandler}
          name="description"
        />
        <Button variant="contained" type="submit">
          Create event
        </Button>
      </Stack>
    </Form>
  );
};

export default EventCreate;
export const action = async ({ request }) => {
  const token = getAuthToken();
  const data = await request.formData();

  const response = await fetch(`http://localhost:8080/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: data.get("title"),
      image: data.get("image"),
      date: data.get("date"),
      location: data.get("location"),
      description: data.get("description"),
    }),
  });

  return redirect("/");
};
