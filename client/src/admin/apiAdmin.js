import { API } from "../config";

export const createEvent = (userId, token, event) => {
  // console.log(name, email, password);
  return fetch(`${API}/event/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(event),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createClient = (eventId, client) => {
  // console.log(name, email, password);
  return fetch(`${API}/client/${eventId}/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(client),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createContactEmail = (data) => {
  // console.log(name, email, password);
  return fetch(`${API}/contact`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createClientEmail = (data) => {
  // console.log(name, email, password);
  return fetch(`${API}/contact-client`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createAuthorEmail = (data) => {
  // console.log(name, email, password);
  return fetch(`${API}/contact-author`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getClients = () => {
  return fetch(`${API}/clients?limit=undefined`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteClient = (eventId, userId, token) => {
  return fetch(`${API}/client/${eventId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteEvent = (eventId, userId, token) => {
  return fetch(`${API}/event/${eventId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getClient = (clientId) => {
  return fetch(`${API}/client/${clientId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getEvent = (eventId) => {
  return fetch(`${API}/event/${eventId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getClientsByEventId = (eventId) => {
  return fetch(`${API}/event/${eventId}/clients`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateClient = (clientId, userId, token, client) => {
  return fetch(`${API}/client/${clientId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(client),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateEvent = (eventId, userId, token, event) => {
  return fetch(`${API}/event/${eventId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(event),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateClientStatus = (userId, token, clientId, status) => {
  return fetch(`${API}/client/${clientId}/status/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status, clientId }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// export const createProduct = (userId, token, product) => {
//   return fetch(`${API}/product/create/${userId}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: product,
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const getCategories = () => {
//   return fetch(`${API}/categories`, {
//     method: "GET",
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

// export const listOrders = (userId, token) => {
//   return fetch(`${API}/order/list/${userId}`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

// export const getStatusValues = (userId, token) => {
//   return fetch(`${API}/order/status-values/${userId}`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

// export const updateOrderStatus = (userId, token, orderId, status) => {
//   return fetch(`${API}/order/${orderId}/status/${userId}`, {
//     method: "PUT",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({ status, orderId }),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };
