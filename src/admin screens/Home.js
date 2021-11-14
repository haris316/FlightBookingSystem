import React from "react";
function Home() {
  let [loading, setLoading] = React.useState(false);
  if (loading)
    return (
      <>
        <div>
          <p>Loading...</p>
        </div>
      </>
    );
  else
    return (
      <>
        <div>
          <p>Admin Dashboard</p>
        </div>
      </>
    );
}

export default Home;
