const { html } = require('uhtml');
const search = require('./search');

module.exports = (app) => {
	return html`<header>
		<a href="/" title="${process.env.APP_NAME}"><svg id="title" alt="${process.env.APP_NAME} Logo" viewBox="0 0 249.78 55.087">
			<g transform="translate(-107.53 -155.84)">
				<g id="lexi">
					<path d="m144.03 159.39-11.339 22.409h-21.62l11.339-22.409z" />
					<path d="m132.69 183.97 11.339 22.409h-21.62l-11.339-22.409z" />
					<path d="m160.1 186.76v7.0042h-6.1056q-1.2442 0-1.7741 0.36864-0.50688 0.36864-0.50688 1.2442 0 0.99072 0.52992 1.3133 0.52992 0.29952 2.1658 0.29952h6.2899v8.9856h-7.3498q-5.184 0-7.9258-2.4653-2.7418-2.4883-2.7418-7.1655v-12.326q0-4.5159 2.5805-7.0042 2.6035-2.4883 7.3037-2.4883h8.1332v9.0317h-5.9674q-2.4192 0-2.4192 1.5667 0 0.92161 0.576 1.2902 0.57601 0.3456 2.0506 0.3456z" />
					<path d="m187.75 174.53-8.1792 15.299 8.4557 16.151h-9.8381l-3.8707-7.6263-3.2717 7.6263h-9.6768l8.64-15.898-8.1792-15.552h9.746l3.6634 7.1424 2.9491-7.1424z" />
					<path d="m198.95 174.53v31.45h-9.3543v-31.45z" />
				</g>
				<g id="conga">
					<path d="m218.5 205.38h-3.2347q-7.6994 0-10.114-3.918-1.8223-2.9613-1.8223-11.481 0-7.5172 1.8223-10.478 2.4146-3.918 9.294-3.918h4.7381q6.5604 0 8.7928 1.8679 2.5513 2.1413 2.5513 8.4739-0.77449-0.13667-1.4123-0.13667-0.68338 0-2.0501 0.13667-1.3668 0.13668-2.0957 0.13668l-1.7768-0.13668q0-2.5057-1.5946-3.3713-1.0934-0.59227-3.6902-0.59227h-1.8679q-3.3258 0-4.5559 1.8679-0.95673 1.4579-0.95673 4.647 0 1.1845 0.0456 3.098 0.0911 1.9135 0.0911 1.959 0 4.0092 1.7768 4.9203 1.0478 0.5467 5.6493 0.5467 2.1868 0 3.0069-0.22779 2.0957-0.59226 2.0957-3.6447 0.45558-0.13668 1.139-0.27335 0.72894-0.13668 1.1845-0.13668 0.68338 0 2.0501 0.2278 1.3668 0.22779 2.0957 0.22779 0.5467 0 0.86561-0.0456 0 6.606-2.7791 8.6106-2.2324 1.6401-9.2484 1.6401zm3.0069-31.208q3.8269 0.68338 7.0616 1.549 0.63782 1.0023 1.0934 2.1412 0.50114 1.139 0.50114 2.0046l-1.5946-3.0524-3.5991-1.4123q-1.4579-0.18224-2.1868-0.18224-0.68338 0-1.6401 0h-3.8725q1.0478-0.13667 2.1868-0.36447 1.6401-0.36447 2.0501-0.68338zm10.797 13.303q-0.50115 0-2.1868-0.45559-0.82006-0.22779-1.3668-0.22779-0.27335 0-0.63782 0.0911-0.31891 0.0456-0.82006 0.2278-1.7312-0.18224-2.7335-0.31891-1.0023-0.13668-1.0934-0.31891l4.5559-0.13668q0.7745 0 1.5034 0 0.72894 0 1.5946 0.13668l-0.0911-8.0183q0.22779 2.1413 0.59226 4.3281 0.36447 2.1412 0.95673 4.6925h-0.27335zm-0.59226 13.531-1.2301-0.22779 0.31891-0.59227q0.0456-0.0911 0.0456-0.91117v-1.3668q0-0.91117 0.2278-1.8679 0.22779-1.0023 0.50114-1.959l0.13668 5.1481v1.7768zm-23.28-25.604q0.13668-0.0456 0.63782-0.31891 0.54671-0.27336 0.72894-0.27336l0.13668 0.18224q0.22779 0 0.68338-0.22779 0.50114-0.27336 0.72893-0.36447 0.2278-0.0911 1.6857-0.13668 1.4579-0.0911 2.7791-0.0911l-3.7358 0.68338-3.6447 0.54671zm8.6561-0.59227-0.95673 0.36447-1.9135-0.13667q1.3212-0.41003 2.688-0.82006l2.369-0.13667q-0.5467 0.13667-1.0023 0.27335-0.41003 0.0911-1.1845 0.45558zm-5.786 14.032q0-0.5467 0.0911-1.0023 0.13668-0.50114 0.36447-1.139v0.50114q0 0.13668 0.31891 2.1413 0.0911 0.59226 0.0911 1.2756v5.5582l-0.86562-4.1458 0.18224-0.59226q0-0.0911-0.0911-1.139-0.0911-1.0478-0.0911-1.4579zm0.72894-5.4215 0.82006-0.63782q-0.36447 0.82005-0.36447 1.6401v0.31891l-0.68338 1.3668zm0.45559 13.759q0.18223 0.0455 1.0023 0.31891 1.0934 0.27335 1.6857 0.27335l3.3258-0.68338q0.27335-0.0456 1.0023-0.18224 0.7745 0 1.5946 0l1.4123-2.4602q-0.36447 1.0478-0.45559 1.4579-0.22779 0.86561-0.22779 1.4579l0.0911 0.22779 0.13667-0.0456q-4.237 0.41002-8.4739 0.77449l-1.0934-1.139zm19.18 4.9659q-0.68338 0.63782-1.6857 1.2756-0.95673 0.63782-1.7312 0.91118 0.41003-0.36447 1.2756-1.0934 0.50115-0.45559 1.139-1.1845l1.0023 0.0911zm-4.8292 3.4169-1.5034 0.0456 2.7335-1.0934q-0.31891 0.22779-0.63782 0.50115-0.31891 0.22779-0.59226 0.5467zm-24.921-21.64-0.13667-4.5103 1.5946-2.2779q1.0023-0.22779 1.6401-0.77449 0.95673-1.0478 1.959-2.1413 0.31891-0.31891 1.7768-0.45558 1.4579-0.13668 3.9636-0.2278-1.0023 0.2278-2.0501 0.50115-1.0478 0.22779-1.959 0.50114-1.7768 0.63782-3.7814 2.2324-2.4146 1.9135-2.5968 3.4625zm5.3759 22.233q-2.688-2.7335-3.9636-7.4716-1.0023-3.7814-1.0023-8.5195 0.22779 1.5946 0.68338 4.647 0.45559 3.0069 1.1845 5.0114 0.13668 0.41002 0.45559 1.2756 0.31891 0.86561 0.63782 1.3668l1.6401 2.1868zm-4.9659-16.811v-2.8702q0-0.41003 0.50115-2.7335 0.50114-2.3235 1.3212-5.6493 0.27335-0.18223 1.7768-1.1845 1.549-1.0478 1.5946-1.4123l0.95673 0.82006q-0.63782 0.0911-1.8679 0.86561-0.86561 0.54671-1.6857 1.2301-0.18223 0.95673-0.50114 1.9135-0.27335 0.95673-0.63782 1.6857 0 0.0456-0.31891 0.45559-0.13668 0.22779-0.18224 0.41003zm20.957 16.447q0.59226 0 0.86561 0.0911-2.1412 0.45558-4.6925 0.95673-2.5057 0.5467-3.6902 0.5467-1.3668 0-3.2802-0.27335-1.8679-0.27335-3.1891-0.63782l-0.72894-1.0478 5.9682 0.7745q0.27335 0.0456 0.91117-0.0456 0.68338-0.0911 0.82005-0.0911 0.0911 0 1.0478 0.0911 1.0023 0.0911 1.3668 0.0911 0.59226 0 2.9158-0.31891 1.0023-0.13668 1.6857-0.13668zm-21.003-9.8407q0.31891 0.54671 0.59226 2.5513 0.0911 0.86561 0.27336 1.0478l0.50114 0.63782-0.0456 0.18224 0.18224 0.36447q0.45558 0.63782 0.59226 1.7312 0.18223 1.0478 0.31891 2.0046l2.0501 2.2779-2.4146-1.8679q-0.72894-2.0046-1.3668-4.0092-0.77449-2.5057-1.8679-6.8794l1.1845 1.959zm26.06-1.2756q-0.68338 0-1.9135-0.0911-1.1845-0.13668-2.5513-0.27336 0.68338-0.36446 3.5991-0.50114 2.9158-0.18223 2.9613-0.18223l-0.63782 0.68337-1.4579 0.36447zm-9.1117-12.027 2.8702 1.0478 0.27335 1.0934q-2.1868-1.0023-4.4192-1.549-2.2324-0.59227-4.4647-0.59227z" />
					<path d="m262.61 195.81q0 0.77449-0.0911 2.6424-0.0911 1.8223-0.0911 1.959-1.2301 1.7768-2.9613 3.7358 0.91118-1.2756 1.4579-2.1868 1.0934-1.7312 1.0934-2.4146 0-2.4146-0.0911-4.4192-0.31891-6.9249-0.31891-7.426 0-0.59226-0.13668-1.4123-0.31891-1.959-0.31891-2.4146 0-0.72894 0.18224-1.5946 0.18223-0.86561 0.36447-1.7312 0.36446 3.5536 0.63782 7.7905 0.27335 4.1914 0.27335 7.4716zm-12.939 8.9295h-4.0547q-5.9682 0-8.7472-2.688-2.7791-2.688-2.7791-8.6561v-5.1026q0-5.6037 2.9158-8.2917 2.9158-2.688 8.565-2.688h3.6447q5.7859 0 8.7928 2.5513 3.1891 2.7335 3.1891 8.4283v5.1026q0 6.1504-2.688 8.7472-2.688 2.5968-8.8384 2.5968zm4.4192-16.264q0-3.098-1.0934-4.2825-1.0934-1.1845-4.1914-1.1845h-2.4146q-3.0069 0-4.1003 1.1845-1.0934 1.1845-1.0934 4.1914v4.7836q0 3.1435 1.0478 4.4647 1.0934 1.3212 4.1458 1.3212h2.4146q3.0524 0 4.1458-1.3212 1.139-1.3668 1.139-4.5103zm-1.2301-11.8q1.4123 0.45558 3.508 1.5034 1.7312 0.91117 3.4624 1.8224 0.41003 0.59226 0.68338 1.5034 0.0911 0.27335 0.22779 0.86561l0.27336-2.8702q-3.0524-0.63782-5.8315-1.2301-2.7335-0.59226-3.098-0.7745l-1.4123-1.1845q0.54671 0.0911 1.139 0.18223 0.63782 0.0456 1.0478 0.18224zm-14.67 2.0501q-1.8679 1.2756-2.4602 1.9135-0.5467 0.63782-0.82005 1.5946 1.5034-1.549 2.8702-2.8702 1.7312-1.6401 3.0524-2.5968 1.8679-0.22779 3.8269-0.50114t3.5991-0.27335q0.50114 0 1.139 0.13667 0.63782 0.13668 1.4579 0.31891-1.139 0.36447-2.2779 0.50115-1.139 0.0911-2.7791 0.0911-0.86561 0-2.4146-0.0456-1.5034-0.0456-2.1413-0.0456-0.41002 0-1.549 0.72894-0.77449 0.5467-1.5034 1.0478zm17.221 25.832q1.0934-0.50115 2.4146-1.2301 1.5946-0.86562 2.2779-1.2756l-6.3782 4.1458-2.369-1.3212q0.59227-0.13668 2.1868-0.18224 1.6401-0.0455 1.8679-0.13667zm-3.7358 1.6401q-0.68338-0.13668-1.4579-0.27335-0.72894-0.0911-1.139-0.0911l-0.27335 0.0911q-0.22779-0.0911-0.68338-0.27335-0.45558-0.13668-0.82005-0.36447zm-18.315-24.055q1.5946-1.139 3.1891-2.5057 1.9135-1.5946 3.0069-2.8246-0.82006 0.2278-1.549 0.45559-0.72893 0.22779-0.77449 0.27335-1.959 1.6857-2.8246 3.3713-0.86562 1.6401-0.86562 4.1003 0 0.45559 0.18224 1.4579 0.18223 1.0023 0.18223 1.5034l-0.13668 9.5673q-0.13667-1.2756-0.36446-2.9613-0.45559-3.3713-0.45559-5.0114 0-3.7358 0.41003-7.426zm4.4647 21.549q3.3713 1.7312 6.9705 2.0501 0.86561 0.0911 1.6401 0.18224 0.7745 0.0911 1.1845 0.27335-1.6857-0.68338-4.2825-1.2756-6.4693-1.4123-7.3805-1.7312-0.54671-0.63782-1.139-2.0957-0.59226-1.4579-1.2756-4.0547 0.72894 1.4123 2.0501 3.5991 1.7312 2.7791 2.2324 3.0524zm14.989-13.622 0.45558 0.86561-0.0911 6.1048-0.59226-1.5034q0.27335-2.0046 0.27335-3.9636l-0.0456-1.5034zm-0.31891-4.647q0.59226 0.45558 0.82005 1.4123 0.2278 0.95674 0.2278 2.0046l-0.13668 1.2301zm-10.023 0.77449q0 0.68338 0.13667 2.0501 0.13668 1.3668 0.13668 2.0957v2.1868q0 1.3212 0.22779 2.1412 0.41003 1.0934 0.68338 2.0046 0.18223-0.0456 0.82006 0.68338 0.63782 0.68338 0.82005 1.0023l-1.1845-0.36447q-1.5946-1.7768-2.0501-3.4624-0.41003-1.7312-0.41003-4.647v-1.4579q0-1.2756 0.27335-2.3235 0.31891-1.0934 1.1845-1.8224zm9.5673-2.3235q-0.36447 0.41002-1.2301 0.72893-0.82005 0.27336-1.5034 0.27336h-3.508l-1.5034-1.0934 7.745 0.0911zm-4.7836 13.986q0.59226-0.0911 1.2756-0.2278 0.68338-0.13667 1.0934-0.13667l2.4146 0.13667-3.3258 0.72894z" />
					<path d="m287.51 205.02q-0.82006 0-1.6401 0-0.68338-0.13668-1.0023-0.18224l-11.891-20.274v20.866h-7.1071v-29.431q3.0524-0.36447 5.7859-0.36447 2.4602 0 5.1481 0.36447 2.1412 5.057 4.8292 10.023 2.4146 4.4192 5.7404 9.5673 0-3.2802-0.0911-5.8771-0.31891-9.1573-0.31891-9.7951 0-2.7335 0.0455-3.1436 0.0456-0.45558 0.36447-2.0046h7.0616v29.75q-0.95673 0.13668-2.9158 0.31891-1.9135 0.18224-4.0092 0.18224zm-10.114-31.39q0.0911 0.22779 0.31891 0.63782 0.22779 0.41003 0.31891 0.7745l-0.0456-0.18224q0.2278 0.45559 0.72894 1.4579 0.45559 1.2301 0.91117 2.4146l-1.2301-0.45558q-0.0911-1.0934-0.36447-2.0957-0.22779-1.0023-0.63782-2.5513zm18.725 1.3668v1.959q0 2.6424-0.27335 4.647-0.27335 1.959-1.139 3.2347 0.31891-2.6424 0.45558-5.1026 0.18224-2.4602 0.18224-4.7381zm-0.95673 30.752 0.0456-19.772q0 3.2802 0.31891 9.8407t0.31891 9.8407l-2.2779 0.59226q-1.4123 0-3.1891-0.2278-1.7768-0.22779-3.4169-0.41002l8.2005 0.13667zm-8.4283-12.665q-2.0046-3.4624-4.0092-6.9705-3.0524-5.5126-3.0524-6.8338 2.4146 3.918 3.7358 6.1504 2.4602 4.1914 2.4602 6.3782 0 0.31891-0.0911 0.68338t-0.18223 0.72894l1.139-0.13668zm-14.533-18.406q-2.5057 0.27335-5.2848 0.7745l-1.3212-1.2301zm3.8269-0.22779 1.0023 0.5467-3.3713-0.27335zm5.1026 24.966q2.1868 3.4169 4.5103 6.3782l4.5103 0.27335-4.6014 0.72894q-0.18223-0.27335-0.7745-0.7745-0.5467-0.45558-0.77449-0.91117-1.549-2.8246-3.0524-5.6948-1.7312-3.1891-3.3258-5.7404-1.959-3.098-3.6902-5.1481l1.0934-0.22779q0.27336 2.4602 2.5057 5.9682 1.7768 2.5968 3.5991 5.1481zm-15.9 5.6493q-0.27336-1.7768-0.59227-3.8269-0.27335-2.0501-0.27335-3.4624 0-2.4602 0.63782-12.392 0.27335-4.237 0.27335-7.426 0-0.82006-0.0911-1.4123t-0.31891-2.0957q-0.13668 0.63782-0.2278 1.2301-0.0911 0.5467-0.0911 1.2301 0 2.3235 0.18223 8.2006 0.18224 5.8771 0.31891 10.342 0.18224 4.4647 0.18224 9.6129zm7.6083 0.59227q0.41003-2.6424 0.50115-4.3736 0.13667-1.7768 0.13667-4.8748-0.0456-2.3235-0.0911-4.647-0.0455-2.369-0.0455-4.6925 0.63782 3.6902 0.68337 4.1003 0.0911 0.36447 0.31891 2.2324 0.2278 0.2278 0.27336 1.3212 0.0455 1.0478 0.0455 1.9135l0.18224-0.18223q-0.18224 0.5467-0.36447 1.0934-0.45559 1.4123-1.0023 1.4123-0.41003 0-0.59226-0.31891-0.13668-0.36447-0.13668-0.77449v-0.2278h1.2756l0.0456 8.155-1.2301-0.13667zm-8.4283-28.747q0 1.2756-0.41003 12.848-0.13667 3.8725-0.13667 7.6994h0.45558q0-5.1481-0.22779-11.162-0.22779-6.0137-0.68338-10.57l1.2301-1.0934q-0.22779 1.2756-0.22779 2.2779zm0.68338 29.613 0.18223-0.95673h0.50115q1.7312 0 3.7814 0.22779 2.0957 0.22779 3.7814 0.59226zm29.294-33.076 1.6401 0.59226-0.59226 0.63782q-0.86562-0.0911-1.7768-0.18224-0.91117-0.0911-1.6857-0.0911h-2.2324l-2.7335 0.0911q1.0023-0.59226 2.0046-0.82005 1.0478-0.22779 2.2324-0.22779z" />
					<path d="m314.06 205.29h-3.1891q-6.4693 0-9.4306-4.2825-2.5513-3.6902-2.5513-10.478 0-7.5627 1.8223-10.752 2.4602-4.2825 9.294-4.2825h4.6014q4.8748 0 7.9728 2.2324 3.508 2.5057 3.508 7.1982h-7.426q-0.31891-1.9135-2.1868-2.5968-1.2756-0.45558-3.6902-0.45558h-1.1845q-3.2347 0-4.3281 1.7312-0.82006 1.3212-0.82006 4.7837v3.5536q0 4.5103 1.3212 5.7404 1.3212 1.1845 5.8771 1.1845 3.5991 0 4.4192-1.0478 0.68337-0.86562 0.68337-4.5559h-5.1937v-5.6948q1.4123 0 4.2825 0.18224 2.8702 0.13667 3.918 0.13667 2.2779 0 4.3281-0.31891v7.4716q0 5.6493-3.2802 8.1094-2.8702 2.1413-8.7472 2.1413zm10.114-29.203 2.0501 2.8246q0.27336 0.86561 0.54671 3.2802 0.13667 1.3212 0.36447 3.3713 0.0456-0.18223-0.45559-0.45558-0.50114-0.27335-0.50114-0.41003 0-0.0911 0.0911-0.59226 0.13668-0.50115 0.13668-0.7745 0-0.77449-0.86561-2.5968-0.86562-1.8679-1.4579-2.2324 0.22779-0.59226 0.59226-0.95673-0.18223-0.13667-0.63782-0.27335-0.41003-0.13668-0.59226-0.22779l0.72894-0.95673zm-3.098-0.31891-3.4169-0.82006q-0.95673 0.0456-1.9135 0.0911-0.95673 0.0456-1.9135 0.0456-0.31891 0-0.63782 0-0.27336 0-0.59227-0.0456l-7.016-0.63782 12.848 0.22779 2.6424 1.139zm2.2779 0.45558v0.27335l-1.7768-0.31891 1.7768 0.0456zm3.9636 14.305-0.13667 0.7745q-0.18224 0.91117-0.31891 2.5057-0.13668 1.549-0.27336 2.7791v-0.36446q0-1.1845 0.0911-3.1436 0.13668-2.0046 0.13668-2.4146 0-0.68338-0.0911-1.2301-0.0911-0.5467-0.13668-0.86561 0.13668 0.41003 0.31891 0.95673 0.2278 0.54671 0.41003 1.0023zm-16.037-7.6538h1.6401q1.549 0.63782 3.2802 1.3212 1.7312 0.63782 3.0069 0.86561l4.7836 0.18223 2.369 0.0911-1.0934 0.63782q-1.7768-0.13667-3.8269-0.27335-2.0501-0.18223-3.098-0.50114-0.18224-0.0456-1.8224-1.2301-1.6401-1.1845-1.9135-1.2756l-3.1435-0.27333zm-8.0639-6.9249q-0.68338 0.5467-2.0501 1.959-1.0023 1.0478-2.0046 2.0501 1.139-2.0957 2.2779-4.237l3.8269-0.68338zm8.9295 17.449q0-1.0934 0.0911-3.6902 0.0911-2.6424 0.0911-2.8246l0.72894 0.18224-0.0456 0.86561q0 0.86561 0.0456 2.5968t0.0456 2.6424l3.6447 1.2756 1.4579 2.688-0.27335-2.5513q-0.0456-0.45559-1.0023-0.59227-0.91117-0.18223-2.4146-0.18223-0.54671 0-1.0023 0.0456-0.41003 0-0.72894 0-0.63782 0-0.63782-0.45559zm11.207 11.162q0.63782 0 0.91118-0.59226 0.68337-1.5946 1.139-3.1891 0.45559-1.6401 0.68338-3.3258l1.139 0.45558-0.36446-0.86561q-0.13668 0.31891-0.36447 1.0023-0.18224 0.68338-0.41003 1.4579-0.86561 2.5968-1.0478 2.8702-0.41003 0.68338-2.369 2.2779-0.18223 0.18223-0.63782 0.27335-0.41002 0.0911-0.77449 0.0911l1.139-0.63783q0.54671 0.18224 0.95673 0.18224zm-15.718-10.433q0-0.22779-0.0911-3.4169-0.0911-3.1891-0.0911-4.5103v-0.5467q0-0.91117 0.18224-1.2301 0.22779-0.31891 0.5467-0.31891t0.59226 0.41003q0.0911 0.13667 0.0911 0.31891 0 1.0934-0.7745 4.4647-1.0934 4.8292-1.139 4.9659l1.6401 3.2802-0.0911 0.0456q-0.0911-0.31891-0.0911-1.139 0-0.82006-0.0911-1.0478-0.0456-0.22779-0.50115-0.86561-0.18223-0.2278-0.18223-0.41003zm1.0934 12.073q2.0501 0 6.1049-0.36447 4.0547-0.36447 6.0593-0.36447l-1.139 0.82006q-0.63782-0.36447-1.0478-0.45559-0.36447-0.0911-1.5946-0.27335-0.50115-0.0456-2.9613 0.50114-2.4602 0.54671-3.0069 0.82006zm-10.433-11.071q-0.31891 0.0911-0.50114 0.45559l1.0478 1.1845q-0.68338-1.4123-0.86562-2.5057-0.13667-1.139-0.13667-3.0069v-2.4146q0-0.59226 0.31891-3.0069 0.13667-1.0478 0.13667-1.7312 0-0.13668-0.27335-0.50115-0.27335-0.36446-0.27335-0.59226 0-0.50114 2.8246-4.6925 2.688-3.9636 2.9613-4.1914l1.8224-0.82006q-1.2756 1.0934-4.4192 5.6493-3.1435 4.5103-3.1435 5.467l-0.0456 3.9636q0 1.3212 0.13668 3.918 0.18223 2.5968 0.41002 2.8246zm-1.6857-5.9226q0.27335 2.3235 0.68338 4.4192 0.41002 2.0501 0.63782 2.4146l-0.2278 0.59226q2.4602 2.5968 4.8292 4.6014 3.098 2.6424 5.9226 4.0547 3.4169 1.7312 6.3782 1.7312l4.1914-0.27335q-1.139-0.18223-5.9682-0.45558-4.8292-0.27336-7.6538-1.3668-0.18224-0.0911-1.9135-1.6857-1.3212-1.2301-1.8679-1.7768-1.7768-1.7768-2.2779-2.369-1.4123-1.6401-1.5946-2.7335-0.13667-1.0934-0.13667-2.0501 0-0.86561 0.13667-2.6424 0.13668-1.7768 0.13668-2.5968zm12.756 8.6561 8.2006-0.0911-0.82005 0.50114-6.4693 0.0456-0.91118-0.45558zm4.6014-10.843 10.57 0.31891q-1.0023 0-2.2324 0.0456-1.1845 0-2.6424 0h-0.95673q-1.139 0-2.5968-0.0456-1.4579-0.0456-2.1413-0.31891z" />
					<path d="m345.75 204.47-1.6401-6.3782h-8.1094l-1.7312 6.3782h-5.8771l7.0616-26.515h9.1117l7.0616 26.515zm-5.7404-21.504-2.9158 10.752h5.8315zm-2.1413-6.3326q0.18224 0 1.3212 0.13667 1.139 0.0911 1.7768 0.0911 0.59226 0 1.139 0 0.59226-0.0456 1.1845-0.0456h0.82005l-0.0456 0.63782q-0.18223 0-2.9613 0.0911-2.7335 0.0911-3.9636 0.0911h-2.5513q0.45559-0.13668 0.91117-0.36447 0.68338-0.36447 0.72894-0.59226 0.27335-0.0456 0.68338-0.0456t0.95673 0zm7.0616 0.63782 1.139 0.5467q0.59226 2.8246 0.86561 4.237 0.54671 2.5513 1.0934 4.237-1.0934-2.6424-1.7312-4.4647-0.86561-2.4602-1.3668-4.5559zm5.7404 22.688-0.18224 0.41003q-0.0456-0.59226-0.0911-1.2301 0-4.2825-1.0934-7.4716-0.45559-1.3212-1.8679-4.647l0.95673-0.36447q0.59226 3.5536 1.0478 5.467 0.22779 1.0023 2.2779 8.8839l-1.0478-1.0478zm1.0478 1.7312q0.36446 0.95673 0.95673 1.8223 0.95673 1.4123 1.0934 1.5946l-1.0478-0.18223q-0.13667-0.36447-0.45558-1.0478-0.27335-0.68338-0.36447-1.0934-0.0911-0.45558-0.18223-1.0934zm-17.631-22.962 0.68338-0.36446q-1.0023 3.5536-2.1413 7.5172-1.2756 4.4192-2.2324 7.5172-0.41003 1.3212-2.369 7.5627 1.3212-5.6037 2.8702-11.162 0.45558-1.6857 3.1891-11.071zm6.2871 19.454q0.86562 0 1.959 0.18223 0.36447 0.0456 1.139 0.18223l-0.18223-0.45558q-2.9158 0-4.2825 0.50114-0.31891 0.13668-2.7791 1.1845l0.54671-1.4579zm-13.394 6.2415q0.86561-1.0934 2.369-7.0616 0.95673-3.9636 1.9135-7.9728l-3.4625 15.809zm6.1048-24.647 0.27335-0.18223q-0.7745 2.9158-1.7312 6.196-0.91117 3.2802-2.0046 6.7427 0.68337-3.2347 1.4123-6.4693 1.0023-4.0547 2.0501-6.2871zm10.387 20q0.36447-0.0456 1.0023 2.5513 0.68338 2.5968 1.0478 2.5968 0.86561 0 1.8223 0t2.0046-0.0456q1.3212 0 2.0957 0.0456 0.82006 0.0456 1.5946 0.27335-0.50114 0.31891-1.6857 0.41003-1.139 0.0911-2.0046 0.0911l-5.1026-0.13667q-0.13668 0.0456-0.18224-0.13668 0-0.18223 0-0.63782v-0.68338q0-0.63782-0.18223-1.7768-0.18224-1.1845-0.41003-2.5513zm-7.745 0.77449q0.18223 0.59226 0.18223 1.4579 0 0.5467-0.0456 1.1845-0.0455 0.63782-0.0455 0.68338l0.13667 1.4123h-1.8679q-1.139 0-3.7814-0.0911-2.6424-0.0911-2.8246-0.0911 4.237 0 7.6538-0.36447 0.13667-0.45558 0.18223-1.2301 0.0456-0.77449 0.0456-0.86561 0.18223-0.0911 0.27335-1.0023 0.0911-0.95673 0.0911-1.0934zm6.0137-11.982-1.2301-2.5057 1.0934 4.237zm0.54671 4.5559-0.54671 0.22779-0.0456-0.86561v-0.27335l0.0456-0.50115zm-2.2779-8.7017-1.9135 8.7017 3.0524-0.0456 0.0911 0.41003h-3.6447l2.4146-9.0662z" />
				</g>
			</g>
		</svg></a>

		${search(app)}

		<div id="headerMenu">
			<a id="settingsButton" class="button">Settings</a>
			<a id="loginCreateAccountButton" class="button">Log In&nbsp;/ Create Account</a>
		</div>

		<div style="clear:both;"></div>
	</header>`;
};
