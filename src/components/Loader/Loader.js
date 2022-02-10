import { Oval } from 'react-loader-spinner';
// import { WrapperLoader } from './Loader styled';

export default function Loader() {
  return (
    <div>
      <Oval
        arialLabel="loading-indicator"
        height={50}
        width={50}
        strokeWidth={5}
        color="green"
        secondaryColor="lightblue"
        textAlign="center"
      />
      ;
    </div>
  );
}
