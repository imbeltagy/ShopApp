import Main from "../Components/Main";
import posts from "./../assets/Posts";

const Home = () => {
  return (
    <Main title="Latest Posts" className="row g-3 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
      {posts.map((e) => (
        <Post key={e.id} name={e.name} imgSrc={e.imgSrc} content={e.content} from={e.from} />
      ))}
    </Main>
  );
};

const Post = ({ name, imgSrc, content, from }) => (
  <div>
    <div className="card h-100">
      <div className="card-header">
        <div className="row align-items-center">
          <div className="avatar col-2 col-sm-1 col-md-2 p-0 p-sm-1" style={{ maxWidth: "45px" }}>
            <img className="w-100 rounded-circle" src={imgSrc} alt={name[0]} />
          </div>
          <h3 className="m-0 fs-6 text-capitalize fw-bold px-1" style={{ width: "fit-content" }}>
            {name}
          </h3>
        </div>
      </div>
      <div className="card-body d-flex flex-column">
        <p className="card-text flex-grow-1">{content}</p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated: {from}</small>
        </p>
      </div>
    </div>
  </div>
);

export default Home;
