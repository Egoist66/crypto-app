import {FC} from 'react'
import {Layout, Spin} from 'antd';
import {Sidebar} from "./components/layout/Sidebar.tsx";
import {Header} from "./components/layout/Header.tsx";
import {Content} from "./components/layout/Content.tsx";
import {useGetCryptoAssetsQuery, useGetCryptoDataQuery} from "./service/cryptoAPI.ts";


export const App: FC  = () => {
    const {
        data: cryptoData,
        isLoading: isCryptoDataLoading,
        isError: isCryptoDataError
    } = useGetCryptoDataQuery('cryptodata')

    const {
        data: assets,
        isLoading: _isAssetsLoading,
        isError: _isAssetsError
    } = useGetCryptoAssetsQuery('cryptoassets')

    if(isCryptoDataLoading || _isAssetsLoading){
        return <Spin fullscreen />

    }

  return (

      <Layout>
          <Header />
        <Layout>
            <Sidebar
                cryptoData={cryptoData}
                isCryptoDataLoading={isCryptoDataLoading}
                isCryptoDataError={isCryptoDataError}
                _isAssetsLoading={_isAssetsLoading}
                _isAssetsError={_isAssetsError}
                assets={assets}
            />
            <Content />
        </Layout>
      </Layout>
  )
}


