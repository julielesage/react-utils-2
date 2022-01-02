/***
 * SWR stands for stale-while-revalidate, 
 * an HTTP cache invalidation strategy popularized by HTTP RFC 5861. 
 * SWR is a fast and lightweight package developed by Vercel.
 * Basically, it performs data fetching in 3 main steps:
 * - Returns cached data first (stale)
 * - Sends the fetch request (revalidate)
 * - Returns the up-to-date data 
 * Also it can handle pagination itself
 */

import useSWR from 'swr';

const SWR = () => {

	const fetcher = (...args) => fetch(...args).then(res => res.json());
	const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts/1', fetcher);
	if (error) return <div>Failed to load</div>
	if (!data) return <div>Loading</div>

	return (
		<div className="App">
			<h2>{data.title}</h2>
			<p>{data.body}</p>
		</div>
	);
};

export default SWR;