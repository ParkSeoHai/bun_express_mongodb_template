import app from "./app";

const PORT = process.env.APP_PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
