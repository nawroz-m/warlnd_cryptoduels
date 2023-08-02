"use client";

const Home = () => {
  const handlerGenerateUrl = async () => {
    try {
      const userId = "64c8b7ed59ddc0ff2e6a28f4";
      const response = await fetch(`/api/generate_url?uid=${userId}`);
      console.log({ response });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={handlerGenerateUrl}>Generate new Url</button>
      </div>
    </>
  );
};

export default Home;
