import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
    width: 100px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -11px;

    @keyframes sk-bouncedelay {
        0%, 80%, 100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1.0);
        }
    }
`;

export const SpinnerBounce1 = styled.div`
    animation-delay: -0.32s;

    width: 18px;
    height: 18px;
    background-color: rgba(18, 179, 196, 0.3);
    border-radius: 100%;
    display: inline-block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    margin: 0 5px;
`;

export const SpinnerBounce2 = styled.div`
    animation-delay: -0.16s;
    width: 18px;
    height: 18px;
    background-color: rgba(18, 179, 196, 0.3);
    border-radius: 100%;
    display: inline-block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    margin: 0 5px;
`;

export const SpinnerBounce3 = styled.div`
    width: 18px;
    height: 18px;
    background-color: rgba(18, 179, 196, 0.3);
    border-radius: 100%;
    display: inline-block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    margin: 0 5px;
`;
