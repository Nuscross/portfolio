export const getMenuList = async () => {
  try {
    const response = await fetch('https://api.sampleapis.com/coffee/hot');
    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.log(error.message);
    return [];
  }
}

export const postContact = async (contactData) => {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...contactData,
        access_key: '5eb343ce-e0ca-4a28-bbe1-423329c978c9',
      })
    });
    const contactResponse = await response.json();
    return contactResponse;
  } 
  catch (error) {
    console.log(error.message);
    return {};
  }
}

export const postLogin = async (credentials) => {
  try {
    const response = await fetch("https://dummyjson.com/auth/login",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials),
    })
    const loginResponse = await response.json();
    return loginResponse;
  } 
  catch (error) {
    console.log(error.message);
    return {};
  }
}

export const getAdmin = async (token) => {
  try {
    const response = await fetch("https://dummyjson.com/auth/me",{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    const adminResponse = await response.json();
    return adminResponse;
  } 
  catch (error) {
    console.log(error.message);
    return {};
  }
}