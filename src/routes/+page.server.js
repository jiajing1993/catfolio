export const load = async () => {
  try {
    const response = await fetch('https://cataas.com/api/cats?tags=cute', {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    return {
      cats: data,
    };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
};
