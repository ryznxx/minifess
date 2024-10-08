import "./News.scss";
const News = ({ url, judul, deskripsi }) => {
  return (
    <div className="home-news">
      <div className="home-news-left">
        <img src={url} alt="a" />
      </div>
      <div className="home-news-right">
        <h4>
          {judul
            ? judul.length > 6
              ? judul.slice(0, 25) + "..."
              : judul
            : "Tidak berjudul"}
        </h4>

        <p>
          {deskripsi
            ? deskripsi.length > 6
              ? deskripsi.slice(0, 25) + "..."
              : deskripsi
            : "Tidak Memiliki Deskripsi Berita ini"}
        </p>
        <a className="waktu" href="#">
          12 september 2024
        </a>
        <div className="home-news-pk">
          <img
            className="pfp"
            src="https://images.unsplash.com/photo-1533110398145-9f8cef8e5ad4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="person"
          />
          <span className="material-symbols-rounded">arrow_outward</span>
        </div>
      </div>
    </div>
  );
};

export default News;
