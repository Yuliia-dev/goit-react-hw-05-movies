import { Oval } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

export default function Loader() {
  return (
    <WrapperLoader>
      <Oval
        arialLabel="loading-indicator"
        height={50}
        width={50}
        strokeWidth={5}
        color="orange"
        secondaryColor="lightblue"
        textAlign="center"
      />
    </WrapperLoader>
  );
}
