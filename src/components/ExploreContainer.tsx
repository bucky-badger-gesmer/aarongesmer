import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <div className="">
        <h1 className="text-xl font-bold">Hello, Ionic with Tailwind!</h1>
         <p className="mt-2 text-gray-600">Start building something incredible.</p>
      </div>
    </div>
  );
};

export default ExploreContainer;
