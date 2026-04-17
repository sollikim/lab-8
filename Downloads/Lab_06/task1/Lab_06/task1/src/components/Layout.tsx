import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app-container">
      <nav style={{ display: "flex", gap: "20px", padding: "15px", background: "#f0f0f0" }}>
        [span_11](start_span)[span_12](start_span){/* Используем Link вместо <a>, чтобы не было перезагрузки[span_11](end_span)[span_12](end_span) */}
        <Link to="/">Главная</Link>
        <Link to="/courses">Курсы</Link>
        <Link to="/about">О нас</Link>
      </nav>

      <main style={{ padding: "20px", minHeight: "80vh" }}>
        [span_13](start_span)[span_14](start_span){/* Здесь будут рендериться дочерние страницы[span_13](end_span)[span_14](end_span) */}
        <Outlet />
      </main>

      <footer style={{ textAlign: "center", padding: "10px", borderTop: "1px solid #ddd" }}>
        <p>Student Portal 2026</p>
      </footer>
    </div>
  );
};

export default Layout;
