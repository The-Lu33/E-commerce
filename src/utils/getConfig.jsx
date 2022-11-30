const getConfig = () => ({
  heanders: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});
export default getConfig;
