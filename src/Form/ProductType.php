<?php

namespace App\Form;

use App\Entity\Product;
use App\Entity\Status;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Validator\Constraints\File;

class ProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', null, ['attr' => ['class' => 'form-control myclass', 'placeholder' => 'Product name', 'id' => 'input']])
            ->add('price', null, [
                "attr" => [
                    "class" => "form-control",
                    "placeholder" => "Product price"
                ]
            ])
            ->add('description', null, [
                "attr" => [
                    "class" => "form-control",
                    "placeholder" => "Product Description"
                ]
            ])
            ->add('fk_status', EntityType::class, [
                // looks for choices from this entity
                'class' => Status::class,

                // uses the User.username property as the visible option string
                'choice_label' => 'name',
                "label" => "Status",

                "attr" => [
                    "class" => "form-control"

                ]

                // used to render a select box, check boxes or radios
                // 'multiple' => true,
                // 'expanded' => true,
            ])
            ->add('picture', FileType::class, [
                'label' => 'Picture (jpg, png, jpeg file)',
                'attr' => ['class' => 'form-control'],
                // unmapped means that this field is not associated to any entity property
                'mapped' => false,

                // make it optional so you don't have to re-upload the PDF file
                // every time you edit the Product details
                'required' => false,

                // unmapped fields can't define their validation using attributes
                // in the associated entity, so you can use the PHP constraint classes
                'constraints' => [
                    new File([
                        'maxSize' => '1024k',
                        'mimeTypes' => [
                            'image/png',
                            'image/jpg',
                            'image/jpeg',
                        ],
                        'mimeTypesMessage' => 'Please upload a valid image file',
                    ])
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
        ]);
    }
}
