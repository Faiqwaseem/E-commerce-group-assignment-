import { Paper ,Typography,List,ListItem,Avatar,ListItemAvatar,Box} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router';



const Review = () => {
   const { id } = useParams();
     const { data, isLoading, isError, error } = useQuery({
    queryKey: ["Review"],
    queryFn: async () => {
      const FetchedData = await fetch(`https://dummyjson.com/products/${id}`);
      return FetchedData.json();
    },

  });

  const reviews = data.reviews || [];
  console.log("reviews",data)
  return (
    <>
    <Paper
        elevation={4}
        sx={{
          mt: 1.2,
          p: 3,
          borderRadius: 3,
          backgroundColor: "#FFFFFF",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Customer Reviews
        </Typography>

        <List>
          {reviews.map((review) => (
            <ListItem alignItems="flex-start" key={review.id}>
              <ListItemAvatar>
                <Avatar src={"https://i.pravatar.cc/40?img=1"} />
              </ListItemAvatar>
              <Box sx={{ display: "flex" ,flexDirection:"column"}}>
              
                <Typography variant="subtitle1" fontWeight={600}>
                  {review.reviewerName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {review.comment}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {review.rating === 1
                    ? "⭐"
                    : review.rating === 2
                    ? "⭐⭐"
                    : review.rating === 3
                    ? "⭐⭐⭐"
                    : review.rating === 4
                    ? "⭐⭐⭐⭐"
                    : review.rating === 5
                    ? "⭐⭐⭐⭐⭐"
                    : ""}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  )
}
export default Review
