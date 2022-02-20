export const apiUrl = process.env.NODE_ENV === "development" || 
                      process.env.NODE_ENV === "test" ? 
                      process.env.REACT_APP_CONEJITOCOMMERCEAPI_DEV : 
                      process.env.REACT_APP_CONEJITOCOMMERCEAPI_PROD;