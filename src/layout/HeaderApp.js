import React from 'react'
import styled from 'styled-components'; 
import IconC from './../components/IconPlace'


const BackIcon = styled(IconC)`

`

const LocationArrow = styled(IconC)`
    color:#ff0198;
`

const AppHeaders = styled.div`
    font-size:12px;
    font-weight:600;
    color: #424749;
    flex-direction:row;
`

const AppHeaderWrap = styled.div`
    display:flex;
    flex-derection:row;
    text-align: left;
    margin: 16px 0 8px;
`
const AppBackAction = styled.div`
    width: 45px;
    font-size: 20px;
`
const AppBackContainer = styled.div`
    width: 80%; 
`
const AppHeaderTitle = styled.div`
    font-size: 8px;
`
const AppLocation = styled.div`
    font-size: 16px;
`

class AppHeader extends React.Component {
    constructor() {
      super();
      this.state = {
       
      };
    }
    componentDidMount(){
      
    }
    render() {
      return (                
        <AppHeaders>
            <AppHeaderWrap>
                <AppBackAction><BackIcon className='fa fa-arrow-left' ></BackIcon></AppBackAction>
                <AppBackContainer>
                    <AppHeaderTitle>
                        ALAMAT PENGANTARAN
                    </AppHeaderTitle>
                    <AppLocation onClick={this.props.locationAction}>
                        TOKOPEDIA TOWER <LocationArrow className='fa fa-chevron-down' ></LocationArrow>
                    </AppLocation>
                </AppBackContainer>
            </AppHeaderWrap>
        </AppHeaders>
      );
    }
  }

 export default AppHeader;