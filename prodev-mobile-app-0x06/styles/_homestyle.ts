import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  // Search Section
  searchGroup: {
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: "#222222",
    paddingVertical: 8,
  },
  searchControl: {
    borderRadius: 8,
    backgroundColor: "#F1F1F1",
    paddingHorizontal: 12,
  },
  searchButton: {
    width: 48,
    height: 48,
    backgroundColor: "#34967C",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },

  // Filter Section
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  filterContainer: {
    width: 90,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  filterText: {
    fontSize: 12,
    marginTop: 2,
    textAlign: "center",
    color: "#333333",
  },

  // Property Listings
  listingContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  // Pagination
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  showMoreButtonText: {
    color: "#333333",
    fontWeight: "600",
  },
});
