import Cookies from 'js-cookie';
import useHttp from '../hooks/use-http';
import AuthContext from '../context/auth-context';
import { useContext } from 'react';

//for detekting login and handling token
export const loginDetector = (authContext, spinnerCtx) => {

	const cookies = Cookies.get();

	const getNewAccessToken = (res) =>{
		console.log(res);
		authContext.login(res.data.accessToken)
		Cookies.remove("access_token")
		Cookies.set("access_token", res.data.accessToken)
	  }

	const getAccessToken =  useHttp(
		{
		  url: "http://localhost:3000/api/auth/refreshtoken",
		  method: "POST",
		  body: {
			refreshToken: cookies.refresh_token,
		  },
		},
		getNewAccessToken
	  );

	  spinnerCtx.toggleSpinner()
	if ((cookies.refresh_token && cookies.access_token) || (cookies.refresh_token && !cookies.access_token) ) {
		console.log("here");
		getAccessToken(cookies.refresh_token)
		// useHttp(
		// 	{
		// 	  url: "http://localhost:3000/api/auth/refreshtoken",
		// 	  method: "POST",
		// 	  body: {
		// 		refreshToken: cookies.refresh_token,
		// 	  },
		// 	},
		// 	getNewAccessToken
		//   )
		// getAccessToken(cookies.refresh_token);
	} else {
		authContext.logout()
	}
	spinnerCtx.toggleSpinner()
};


export const getInitialValues = (contextData) => {
	if (!contextData.isDataFetched.isProfileFetched){
		// reqProfile(contextData);
	}
	if (!contextData.isDataFetched.isAttValuesFetched) {
		// getAttributes(contextData);
	}
	if (!contextData.isDataFetched.isBrandsFetched) {
		// getBrands(contextData);
	}
	// if (!contextData.isDataFetched.isAttributesFetched && (contextData.attributes.length !== 0)) {
	// 	getAttValue(contextData);
	// }
};
