import styled from 'styled-components';



export const StyledTopBar: any = styled.div`
    -webkit-app-region: drag;

    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    height: 40px;
    z-index: 99999;

    padding-left: 80px;
    display: flex;
    flex-direction: row;

    background-color: ${(props: any) => {
        if (props.mouseOver) {
            return props.theme.backgroundColorDark;
        }
        return 'transparent';
    }};
`;


export const StyledTopBarAdd: any = styled.div`
    display: grid;
    place-content: center;
    width: 40px;
`;
