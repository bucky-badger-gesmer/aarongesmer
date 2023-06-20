import { Card, Carousel, Typography } from "antd";

const { Title } = Typography;

const Watches = () => {
  return (
    <div className="mb-4 md:mb-0">
      <Card>
        <Title className="text-center" level={2}>
          Watches
        </Title>
        <Carousel>
          <div>
            <img alt="Rolex 124060" src="/Rolex_124060.jpeg" />
          </div>
          <div>
            <img alt="Cartier W2SA0009" src="/Cartier_W2SA0009.jpeg" />
          </div>
          <div>
            <img alt="Rolex 126613LN" src="/Rolex_126613LN.jpeg" />
          </div>
          <div>
            <img alt="Seiko SKX007J1" src="/Seiko_SKX007J1.jpeg" />
          </div>
        </Carousel>
      </Card>
    </div>
  );
};

export default Watches;
