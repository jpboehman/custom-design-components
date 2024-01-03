import { useState, useEffect } from "react";
import { generalRequest } from "http/httpService";

/**
 * Custom hook to fetch data from an API.
 * 
 * @param {string} urlPath - The API endpoint to fetch data from.
 * @param {number} limit - The number of items to fetch per page (for pagination).
 * @param {number} page - The current page number (for pagination).
 * @return The response state containing data, loading status, and error information.
 */
const useApi = (urlPath, limit, page) => {
    // State to manage API response, loading status, and errors.
    const [response, setResponse] = useState({
        data: null,
        isLoading: false,
        isError: false,
        errorMessage: ""
    });

    // Function to fetch data from the API.
    const fetchData = async () => {
        // Set loading to true before making the request.
        setResponse(prevResponse => ({ ...prevResponse, isLoading: true }));

        try {
            // Perform the API request.
            const { data } = await generalRequest.get(
                `${urlPath}?limit=${limit}&page=${page}`
            );
            // Update the response state with the received data.
            setResponse(prevResponse => ({ ...prevResponse, data }));
        } catch (error) {
            // Update the response state with error information if request fails.
            setResponse(prevResponse => ({
                ...prevResponse,
                isError: true,
                errorMessage: error.toString()
            }));
        } finally {
            // Set loading to false after the request is complete.
            setResponse(prevResponse => ({ ...prevResponse, isLoading: false }));
        }
    }

    // useEffect hook to trigger the fetchData function when dependencies change.
    useEffect(() => {
        fetchData();
    }, [urlPath, limit, page]);

    // Return the response state for use in components.
    return response;
}

export default useApi;
