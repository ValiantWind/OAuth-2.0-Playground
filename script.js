function LoginWithDiscord(){

	window.open("https://discord.com/api/oauth2/authorize?client_id=1021824465140727860&redirect_uri=https%3A%2F%2Fvaliantwind.me%2FOAuth-2.0-Playground%2F&response_type=code&scope=identify", "_blank")
}

function LoginWithTwitch(){
	window.open("https://api.twitch.tv/kraken/oauth2/authorize?response_type=code&client_id=%5BYOUR_PUBLIC_CLIENT_ID%5D&redirect_uri=%5Bhttps://OAuth-Redirect.valiantwind.repl.co%5D&scope=%5BSCOPES_REQUIRES%5D", "_blank")
}

function LoginWithReddit(){
	window.open("https://www.reddit.com/api/v1/authorize?client_id=f0fGQr4lhU1l3tUaEJD8LA&response_type=code&state=RANDOM_STRING&redirect_uri=https://valiantwind.me/OAuth-2.0-Playground&duration=temporary&scope=identity", "_blank")
}