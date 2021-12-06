import React from 'react';
import { ReactChannelIO, useChannelIOApi, useChannelIOEvent } from 'react-channel-plugin';

function Footer(props) {
    const CHANNEL_ID_PLUGIN_KEY = '0ddfeefe-3928-4044-94ce-c5be5536c579';

    const AppPage = () => {
        const { showMessenger } = useChannelIOApi();
    
        useChannelIOEvent("onShowMessenger", () => {
            console.log("Messenger opened!");
        });
        return (
            <button onClick={showMessenger}>
                <span>Open</span>
            </button>
        );
    };

    return (
        <footer id="footer">
            <ul className="clearfix">
                <li><a href="https://www.instagram.com/">instagram</a></li>
                <li><a href="https://www.facebook.com/">facebook</a></li>
            </ul>
            <h4>&#40;주&#41; 요리조리</h4>
            <address>
                <p>
                    <span>서울특별시 금천구 가산디지털2로 123 월드메르디앙 2차</span>
                    <span>대표자 김담인, 김준기</span>
                </p>
                <p>
                    <span>대표전화 02-1234-5678</span>
                    <span>사업자등록번호 123-45-67890</span>
                    <span>개인정보보호책임자 전혜인</span>
                </p>
            </address>
            <p>&copy; yoribogojoribogo corp. all right reserved.</p>
            <ReactChannelIO pluginKey={CHANNEL_ID_PLUGIN_KEY} locale="en" autoBoot>
			    <AppPage />
		    </ReactChannelIO>
        </footer>
    );
}

export default Footer;