export const getRandomMessage = async () => {
  const response = await fetch(`api/v1/greetings`);
  return response.json();
};
