import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons,ProductCard,ProductImage,ProductTitle } from '../.';

const App = () => {
  const product1 = {
    id:'1',
    title: 'Coffe Mug- CardOne',
    //img: './coffee-mug.png'
  }

  return (
    <>
      <ProductCard
        product={product1}
        initialValues={{
            count:4,
            maxCount: 10
        }}
      >
        {
            ({reset,count,increaseBy,isMaxCountReached}) => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </>
            )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
