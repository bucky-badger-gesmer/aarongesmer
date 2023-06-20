import { Card, Carousel, Typography } from "antd";

const { Link, Title } = Typography;

const Watches = () => {
  return (
    <div>
      <Card>
        <Title className="text-center" level={2}>
          Watches
        </Title>
        <Carousel autoplay>
          <div>
            <h3
              style={{
                margin: 0,
                height: "160px",
                color: "#fff",
                lineHeight: "160px",
                textAlign: "center",
                background: "#364d79",
              }}
            >
              <Link
                href="https://sportql-staging.up.railway.app"
                target="_blank"
                style={{ color: "inherit" }}
              >
                SportQL Apollo Server
              </Link>
            </h3>
          </div>
          <div>
            <h3
              style={{
                margin: 0,
                height: "160px",
                color: "#fff",
                lineHeight: "160px",
                textAlign: "center",
                background: "#364d79",
              }}
            >
              <Link
                href="https://sportql-client.netlify.app"
                target="_blank"
                style={{ color: "inherit" }}
              >
                SportQL Client React App
              </Link>
            </h3>
          </div>
        </Carousel>
      </Card>
    </div>
  );
};

export default Watches;
