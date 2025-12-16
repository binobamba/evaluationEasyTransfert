import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('users') // Regroupe toutes les routes users dans Swagger UI
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ 
    summary: 'Créer un nouvel utilisateur',
    description: 'Crée un nouvel utilisateur dans le système'
  })
  @ApiBody({ 
    type: CreateUserDto,
    description: 'Données de l\'utilisateur à créer' 
  })
  @ApiResponse({ 
    status: 201, 
    description: 'Utilisateur créé avec succès',
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Données invalides fournies' 
  })
  @ApiResponse({ 
    status: 409, 
    description: 'Un utilisateur avec cet email existe déjà' 
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }



  @Get()
  @ApiOperation({ 
    summary: 'Récupérer tous les utilisateurs',
    description: 'Retourne la liste de tous les utilisateurs enregistrés'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Liste des utilisateurs récupérée avec succès' 
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Erreur serveur interne' 
  })
  findAll() {
    return this.usersService.findAll();
  }

  @ApiBody({ 
    type: UpdateUserDto,
    description: 'Données partielles pour la mise à jour de l\'utilisateur'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Utilisateur mis à jour avec succès' 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Utilisateur non trouvé avec cet ID' 
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Données de mise à jour invalides' 
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

}