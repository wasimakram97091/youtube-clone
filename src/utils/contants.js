const GOOGLE_API_KEY = "AIzaSyBoS-42_ZpuPpZcnBaYsVzJ-RMqhvn9zuc";

export const YOUTUBE_VIDEOS_URL = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SUGGESTIONS_URL = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 15;

export const SEARCH_BY_QUERY = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=namaste&key=${GOOGLE_API_KEY}`;
