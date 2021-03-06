import React from 'react';

import { Paper, Typography, Divider, Tooltip, Button } from '@material-ui/core';

import { FavoriteBorderOutlined, FavoriteOutlined } from '@material-ui/icons';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

export default function GamesListItem({
  id,
  src,
  name,
  developer,
  price,
  message,
  thumbnail,
  isFavorite,
  onFavorite,
  ...rest
}) {
  const dispatch = useDispatch();

  return (
    <Paper className="gamecard" {...rest}>
      <div
        className="position-relative"
        onClick={() => dispatch(push(`/game/${id}`))}
      >
        <img className="img-fluid" src={src} alt={name} />
        <img
          src={thumbnail}
          className="img-fluid"
          width="200px"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          alt={name + '-thumbnail'}
        />
      </div>
      <div className="details p-2">
        <div className="row">
          <div className="col-12">
            <Typography variant="body2" component="span">
              {name}
            </Typography>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Typography variant="caption" component="span">
              {developer}
            </Typography>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-between">
            <Typography variant="caption" component="span">
              {message}
            </Typography>
            <Typography variant="subtitle2" component="span"></Typography>
          </div>
        </div>
        <Divider />
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-between">
            <div className="cardActions">
              {!isFavorite ? (
                <Tooltip title="Adicionar na lista de desejos">
                  <Button
                    size="small"
                    onClick={onFavorite}
                    style={{ outline: 'none' }}
                  >
                    <FavoriteBorderOutlined
                      fontSize="small"
                      className="favorite-icon"
                    />
                  </Button>
                </Tooltip>
              ) : (
                <Tooltip title="Remover da lista de desejos">
                  <Button
                    size="small"
                    onClick={onFavorite}
                    style={{ outline: 'none' }}
                  >
                    <FavoriteOutlined
                      fontSize="small"
                      htmlColor="red"
                      className="favorite-icon favorited"
                    />
                  </Button>
                </Tooltip>
              )}
            </div>

            <Typography
              style={{ fontSize: '17px' }}
              variant="subtitle2"
              component="span"
            >
              {price}
            </Typography>
          </div>
        </div>
      </div>
    </Paper>
  );
}
